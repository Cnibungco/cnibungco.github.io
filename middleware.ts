import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/portfolio/:path*',
};

const REALM = 'Portfolio Access';
const AUTH_HEADER = 'authorization';
const BASIC_PREFIX = 'Basic ';

function getCredentials(): { username: string; password: string } | null {
  const username = process.env.PORTFOLIO_USERNAME;
  const password = process.env.PORTFOLIO_PASSWORD;

  if (!username || !password) {
    console.error('[Auth] PORTFOLIO_USERNAME or PORTFOLIO_PASSWORD not set');
    return null;
  }

  if (username.trim() === '' || password.trim() === '') {
    console.error('[Auth] Credentials cannot be empty strings');
    return null;
  }

  return { username, password };
}

function parseAuthHeader(authHeader: string | null): { username: string; password: string } | null {
  if (!authHeader) {
    return null;
  }

  if (!authHeader.toLowerCase().startsWith(BASIC_PREFIX.toLowerCase())) {
    return null;
  }

  try {
    const base64Token = authHeader.slice(BASIC_PREFIX.length);
    
    if (!/^[A-Za-z0-9+/=]+$/.test(base64Token)) {
      return null;
    }

    const credentials = atob(base64Token);
    
    const colonIndex = credentials.indexOf(':');
    if (colonIndex === -1) {
      return null;
    }

    const username = credentials.slice(0, colonIndex);
    const password = credentials.slice(colonIndex + 1);

    if (username === '' || password === '') {
      return null;
    }

    return { username, password };
  } catch (error) {
    console.error('[Auth] Failed to parse auth header:', error);
    return null;
  }
}

function secureCompare(a: string, b: string): boolean {
  const bufferA = new TextEncoder().encode(a);
  const bufferB = new TextEncoder().encode(b);
  
  const maxLength = Math.max(bufferA.length, bufferB.length);
  
  let mismatch = bufferA.length !== bufferB.length ? 1 : 0;
  
  for (let i = 0; i < maxLength; i++) {
    const byteA = i < bufferA.length ? bufferA[i] : 0;
    const byteB = i < bufferB.length ? bufferB[i] : 0;
    mismatch |= byteA ^ byteB;
  }
  
  return mismatch === 0;
}

function validateCredentials(
  provided: { username: string; password: string },
  expected: { username: string; password: string }
): boolean {
  const usernameValid = secureCompare(provided.username, expected.username);
  const passwordValid = secureCompare(provided.password, expected.password);
  
  return usernameValid && passwordValid;
}

function createUnauthorizedResponse(): NextResponse {
  const response = new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });

  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');

  return response;
}

export function middleware(request: NextRequest) {
  const expectedCredentials = getCredentials();
  if (!expectedCredentials) {
    return createUnauthorizedResponse();
  }

  const authHeader = request.headers.get(AUTH_HEADER);
  
  const providedCredentials = parseAuthHeader(authHeader);
  
  if (!providedCredentials) {
    return createUnauthorizedResponse();
  }

  const isValid = validateCredentials(providedCredentials, expectedCredentials);
  
  if (!isValid) {
    return createUnauthorizedResponse();
  }

  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}
