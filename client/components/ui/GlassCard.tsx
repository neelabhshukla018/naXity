"use client";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[32px]

        bg-white/70
        dark:bg-white/5

        backdrop-blur-xl

        border
        border-white/20

        shadow-xl

        ${className}
      `}
    >
      {children}
    </div>
  );
}