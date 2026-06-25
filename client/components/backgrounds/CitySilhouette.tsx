"use client";

export default function CitySilhouette() {
  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1920 280"
        preserveAspectRatio="none"
        className="w-full h-[220px] md:h-[260px]"
      >
        <path
          className="fill-slate-300/20 dark:fill-slate-700/20"
          d="
          M0 280
          L0 170
          L70 170
          L70 110
          L130 110
          L130 150
          L180 150
          L180 70
          L260 70
          L260 170
          L340 170
          L340 120
          L420 120
          L420 60
          L500 60
          L500 170
          L610 170
          L610 90
          L690 90
          L690 150
          L760 150
          L760 40
          L860 40
          L860 170
          L980 170
          L980 100
          L1060 100
          L1060 70
          L1140 70
          L1140 170
          L1240 170
          L1240 50
          L1340 50
          L1340 170
          L1450 170
          L1450 130
          L1540 130
          L1540 80
          L1630 80
          L1630 170
          L1730 170
          L1730 110
          L1810 110
          L1810 170
          L1920 170
          L1920 280
          Z
        "
        />

        {/* Ground */}
        <rect
          y="170"
          width="1920"
          height="110"
          className="fill-slate-200/30 dark:fill-slate-800/40"
        />
      </svg>

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-transparent dark:to-[#07111F]" />
    </div>
  );
}