'use client';

import { useId } from 'react';

export default function TnalakStrip() {
  const patternId = `tnalak-${useId().replace(/:/g, '')}`;

  return (
    <div className="tnalak-strip">
      <svg
        width="100%"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin repeat"
        aria-hidden
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="30"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <rect width="30" height="18" fill="#131720" />
            <polygon
              points="15,2 28,9 15,16 2,9"
              fill="none"
              stroke="#7FB069"
              strokeWidth="0.7"
            />
            <polygon
              points="15,5 22,9 15,13 8,9"
              fill="none"
              stroke="#7FB069"
              strokeWidth="0.45"
              opacity="0.4"
            />
            <rect x="14" y="8" width="2" height="2" fill="#7FB069" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="18" fill={`url(#${patternId})`} opacity="0.6" />
      </svg>
    </div>
  );
}
