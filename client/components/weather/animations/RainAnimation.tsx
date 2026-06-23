"use client";

export default function RainAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={i}
          className="rain-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random()}s`,
            animationDuration: `${0.8 + Math.random()}s`,
          }}
        />
      ))}

      <div className="absolute top-2 right-2 text-5xl opacity-80">
        🌧️
      </div>
    </div>
  );
}