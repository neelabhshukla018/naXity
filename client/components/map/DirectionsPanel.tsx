"use client";

export default function DirectionsPanel() {
  return (
    <div className="absolute left-5 top-24 w-80 rounded-3xl bg-white/80 dark:bg-black/40 backdrop-blur-xl p-5 shadow-xl">

      <h3 className="font-semibold text-lg">

        Directions

      </h3>

      <div className="mt-4 space-y-3">

        <input
          placeholder="From"
          className="w-full rounded-xl border p-3 bg-transparent"
        />

        <input
          placeholder="To"
          className="w-full rounded-xl border p-3 bg-transparent"
        />

      </div>

    </div>
  );
}