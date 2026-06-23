"use client";

import Image from "next/image";

export default function CityBackground() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1514565131-fce0801e5785"
        alt="City"
        fill
        priority
        className="
          object-cover
          object-center
        "
      />

      {/* Light Mode Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-white/60
          via-white/35
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-white/50
          via-transparent
          to-transparent

          dark:from-slate-950/40
        "
      />

      {/* Dark Mode Overlay */}
      <div
        className="
          absolute
          inset-0

          hidden
          dark:block

          bg-gradient-to-r
          from-slate-950/75
          via-slate-950/40
          to-transparent
        "
      />
    </>
  );
}