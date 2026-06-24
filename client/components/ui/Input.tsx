"use client";

import { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        h-12

        px-4

        rounded-2xl

        bg-white/80
        dark:bg-white/5

        border
        border-slate-200
        dark:border-white/10

        text-slate-900
        dark:text-white

        placeholder:text-slate-400

        outline-none

        focus:ring-2
        focus:ring-blue-500/40
        focus:border-blue-500

        transition-all
        duration-300

        ${className}
      `}
    />
  );
}