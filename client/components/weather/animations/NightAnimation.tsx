"use client";

export default function NightAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Moon */}
      <div
        className="
          absolute
          top-2
          right-3
          h-12
          w-12
          rounded-full
          bg-blue-100
          shadow-[0_0_25px_rgba(255,255,255,0.8)]
        "
      />

      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}