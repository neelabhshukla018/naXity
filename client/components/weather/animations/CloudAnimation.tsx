"use client";

export default function CloudAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="
          absolute
          top-2
          -left-24
          text-7xl
          opacity-70
          animate-cloud-slow
        "
      >
        ☁️
      </div>

      <div
        className="
          absolute
          top-10
          -left-32
          text-6xl
          opacity-60
          animate-cloud-medium
        "
      >
        ☁️
      </div>

      <div
        className="
          absolute
          top-0
          -left-40
          text-8xl
          opacity-50
          animate-cloud-fast
        "
      >
        ☁️
      </div>
    </div>
  );
}