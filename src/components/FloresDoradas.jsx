import React from "react";

function RamaDorada({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="oro" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0A6" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="65%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#F9E29C" />
        </linearGradient>
      </defs>

      {/* Tallo principal */}
      <path
        d="M60 295 Q25 230 65 170 T55 90 Q45 50 65 12"
        stroke="url(#oro)"
        strokeWidth="2"
      />

      {/* Ramitas */}
      <path
        d="M43 240 Q15 220 12 190
           M42 210 Q75 195 82 165
           M52 160 Q20 145 22 115
           M60 105 Q88 85 91 60
           M62 65 Q35 50 38 30"
        stroke="url(#oro)"
        strokeWidth="1.5"
      />

      {/* Hojas doradas */}
      {[
        [20, 195, -35],
        [73, 181, 35],
        [30, 124, -30],
        [83, 80, 35],
        [43, 40, -35],
        [34, 228, -35],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="7"
          ry="15"
          transform={`rotate(${r} ${x} ${y})`}
          fill="url(#oro)"
          fillOpacity=".72"
          stroke="#C5A044"
          strokeWidth=".7"
        />
      ))}

      {/* Flores de cinco pétalos */}
      {[
        [12, 184],
        [83, 158],
        [22, 109],
        [91, 57],
        [38, 27],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-7"
              rx="4.5"
              ry="7"
              transform={`rotate(${angle})`}
              fill="url(#oro)"
              stroke="#C5A044"
              strokeWidth=".6"
            />
          ))}
          <circle r="3" fill="#FFF0A6" stroke="#B8860B" strokeWidth=".7" />
        </g>
      ))}

      {/* Pequeños destellos */}
      <g fill="#D4AF37">
        <path d="M65 130 L68 138 L76 141 L68 144 L65 152 L62 144 L54 141 L62 138 Z" />
        <path d="M32 75 L34 81 L40 83 L34 85 L32 91 L30 85 L24 83 L30 81 Z" />
        <circle cx="102" cy="115" r="2" />
        <circle cx="15" cy="265" r="2" />
      </g>
    </svg>
  );
}

export default function FloresDoradas() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Lateral izquierdo */}
      <RamaDorada className="absolute -left-5 top-[8%] w-20 sm:w-28 opacity-75" />

      <RamaDorada className="absolute -left-8 top-[48%] w-24 sm:w-32 opacity-55 rotate-12" />

      <RamaDorada className="absolute -left-5 top-[78%] w-20 sm:w-28 opacity-70 -rotate-12" />

      {/* Lateral derecho */}
      <RamaDorada className="absolute -right-5 top-[18%] w-20 sm:w-28 opacity-70 -scale-x-100" />

      <RamaDorada className="absolute -right-8 top-[55%] w-24 sm:w-32 opacity-55 -scale-x-100 -rotate-12" />

      <RamaDorada className="absolute -right-5 top-[82%] w-20 sm:w-28 opacity-70 -scale-x-100 rotate-12" />
    </div>
  );
}