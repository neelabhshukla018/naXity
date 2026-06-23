"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
        flex
        items-center

        h-[72px]

        bg-white/85

        backdrop-blur-xl

        rounded-full

        pl-8
        pr-3

        border
        border-white/70

        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      <input
        type="text"
        placeholder="Where do you want to go?"
        className="
          flex-1

          bg-transparent

          outline-none

          text-lg

          text-slate-700

          placeholder:text-slate-400
        "
      />

      <button
        className="
          h-14
          w-14

          rounded-full

          bg-blue-600

          text-white

          flex
          items-center
          justify-center

          shadow-lg

          hover:scale-105

          transition-all
          duration-300
        "
      >
        <Search size={24} />
      </button>
    </div>
  );
}