"use client";

import { Search } from "lucide-react";

export default function SearchPlaces() {
  return (
    <div className="absolute top-5 left-5 right-5 z-20">

      <div className="flex items-center gap-3 rounded-full bg-white/90 dark:bg-black/40 backdrop-blur-xl px-5 py-3 shadow-lg">

        <Search size={20} />

        <input
          placeholder="Search places, destinations..."
          className="flex-1 bg-transparent outline-none"
        />

      </div>

    </div>
  );
}