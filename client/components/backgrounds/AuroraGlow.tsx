"use client";

export default function AuroraGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Blue */}
      <div
        className="
          absolute
          -top-40
          -left-40
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-400/20
          dark:bg-blue-500/20
          blur-[140px]
          animate-floatSlow
        "
      />

      {/* Top Right Purple */}
      <div
        className="
          absolute
          -top-32
          -right-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-400/20
          dark:bg-purple-600/20
          blur-[140px]
          animate-floatMedium
        "
      />

      {/* Bottom Left Cyan */}
      <div
        className="
          absolute
          bottom-0
          left-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-300/20
          dark:bg-cyan-500/15
          blur-[130px]
          animate-floatFast
        "
      />

      {/* Bottom Right Pink */}
      <div
        className="
          absolute
          bottom-[-150px]
          right-[-100px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-fuchsia-300/15
          dark:bg-fuchsia-500/15
          blur-[150px]
          animate-floatMedium
        "
      />

      {/* Center Soft White Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/40
          dark:bg-white/5
          blur-[180px]
        "
      />
    </div>
  );
}