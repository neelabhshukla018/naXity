"use client";

export default function SunnyAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sun Glow */}
      <div
        className="
          absolute
          -top-8
          -right-8
          h-32
          w-32
          rounded-full
          bg-yellow-300/60
          blur-3xl
          animate-pulse
        "
      />

      {/* Sun */}
      <div
        className="
          absolute
          top-3
          right-3
          h-14
          w-14
          rounded-full
          bg-yellow-400
          shadow-[0_0_30px_rgba(250,204,21,0.8)]
          animate-spin
        "
        style={{
          animationDuration: "25s",
        }}
      />
    </div>
  );
}