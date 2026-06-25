"use client";

export default function AnimatedGrid() {
  return (
    <div
      className="
        absolute inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-[-200px]
          animate-grid
          opacity-60
          dark:opacity-30
          bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Radial Fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(255,255,255,0.75)_100%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_35%,#07111F_100%)]
        "
      />
    </div>
  );
}