"use client";

export default function SnowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={i}
          className="snowflake text-white"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            fontSize: `${12 + Math.random() * 10}px`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}