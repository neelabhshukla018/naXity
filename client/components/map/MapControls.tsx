"use client";

import {
  LocateFixed,
  Plus,
  Minus,
} from "lucide-react";

export default function MapControls() {
  return (
    <div className="absolute right-5 top-28 flex flex-col gap-3">

      <button className="rounded-full bg-white dark:bg-[#111827] p-3 shadow-lg">
        <LocateFixed size={20} />
      </button>

      <button className="rounded-full bg-white dark:bg-[#111827] p-3 shadow-lg">
        <Plus size={20} />
      </button>

      <button className="rounded-full bg-white dark:bg-[#111827] p-3 shadow-lg">
        <Minus size={20} />
      </button>

    </div>
  );
}