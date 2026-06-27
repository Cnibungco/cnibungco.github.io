interface GreenBannerProps {
  patternId: string;
  children: React.ReactNode;
}

export default function GreenBanner({ patternId, children }: GreenBannerProps) {
  const gradientId = `${patternId}-fade`;

  return (
    <div className="relative overflow-hidden px-6 lg:px-12 py-6 lg:py-8 bg-accent">
      <svg
        className="absolute top-0 right-0 h-full w-[220px] pointer-events-none"
        viewBox="0 0 220 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="14,2 26,14 14,26 2,14"
              fill="none"
              stroke="rgba(20,24,32,0.18)"
              strokeWidth="1"
            />
            <polygon
              points="14,6 20,14 14,22 8,14"
              fill="none"
              stroke="rgba(20,24,32,0.1)"
              strokeWidth="0.6"
            />
            <rect x="13" y="13" width="2" height="2" fill="rgba(20,24,32,0.18)" />
          </pattern>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7FB069" stopOpacity="1" />
            <stop offset="38%" stopColor="#7FB069" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="220" height="120" fill={`url(#${patternId})`} />
        <rect width="220" height="120" fill={`url(#${gradientId})`} />
      </svg>

      <div className="relative">{children}</div>
    </div>
  );
}
