"use client";

import AnimatedGrid from "./AnimatedGrid";
import AuroraGlow from "./AuroraGlow";
import FloatingParticles from "./FloatingParticles";
import RouteLines from "./RouteLines";
import FloatingPins from "./FloatingPins";
import CitySilhouette from "./CitySilhouette";

export default function AnimatedBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        select-none
        -z-0
      "
      aria-hidden="true"
    >
      {/* Base Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-slate-50
          via-blue-50
          to-indigo-100
          dark:from-[#07111F]
          dark:via-[#09192E]
          dark:to-[#0F172A]
        "
      />

      {/* Aurora Lights */}
      <AuroraGlow />

      {/* Animated Grid */}
      <AnimatedGrid />

      {/* Route Network */}
      <RouteLines />

      {/* Navigation Pins */}
      <FloatingPins />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Bottom City */}
      <CitySilhouette />

      {/* Top Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-white/40
          dark:to-[#07111F]/50
        "
      />

      {/* Side Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(255,255,255,0.45)_100%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_45%,rgba(7,17,31,0.85)_100%)]
        "
      />
    </div>
  );
}