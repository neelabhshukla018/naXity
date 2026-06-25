"use client";

export default function RouteLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        fill="none"
      >
        {/* Route 1 */}
        <path
          d="M-50 220
             C250 180 420 420 760 340
             S1350 120 1980 260"
          className="route-line"
        />

        {/* Route 2 */}
        <path
          d="M-100 760
             C260 600 520 930 900 760
             S1450 560 2050 720"
          className="route-line delay-1"
        />

        {/* Route 3 */}
        <path
          d="M250 -50
             C420 250 780 120 980 380
             S1450 780 1700 1100"
          className="route-line delay-2"
        />

        {/* Moving Dot */}
        <circle r="6" className="route-dot">
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            rotate="auto"
            path="M-50 220 C250 180 420 420 760 340 S1350 120 1980 260"
          />
        </circle>

        <circle r="5" className="route-dot delay-1">
          <animateMotion
            dur="16s"
            repeatCount="indefinite"
            rotate="auto"
            path="M-100 760 C260 600 520 930 900 760 S1450 560 2050 720"
          />
        </circle>

        <circle r="5" className="route-dot delay-2">
          <animateMotion
            dur="14s"
            repeatCount="indefinite"
            rotate="auto"
            path="M250 -50 C420 250 780 120 980 380 S1450 780 1700 1100"
          />
        </circle>
      </svg>
    </div>
  );
}