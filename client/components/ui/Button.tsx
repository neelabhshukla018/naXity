"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        w-full
        h-12
        rounded-2xl

        bg-blue-600
        hover:bg-blue-700

        text-white
        font-medium

        transition-all
        duration-300

        hover:scale-[1.02]
        active:scale-[0.98]

        shadow-lg
        shadow-blue-500/20

        ${className}
      `}
    >
      {children}
    </button>
  );
}