"use client";

export default function StormAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 45 }).map((_, i) => (
        <span
          key={i}
          className="rain-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random()}s`,
          }}
        />
      ))}

      <div className="lightning-flash" />

      <div
        className="
          absolute
          top-2
          right-2
          text-5xl
          opacity-80
        "
      >
        ⚡
      </div>
    </div>
  );
}