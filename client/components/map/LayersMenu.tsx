"use client";

export default function LayersMenu() {
  return (
    <div className="absolute right-20 top-28 rounded-3xl bg-white/80 dark:bg-black/50 backdrop-blur-xl p-5 shadow-xl">

      <h3 className="font-semibold mb-4">

        Layers

      </h3>

      <div className="space-y-3">

        <label className="flex justify-between">

          Traffic

          <input type="checkbox" />

        </label>

        <label className="flex justify-between">

          Transit

          <input type="checkbox" />

        </label>

        <label className="flex justify-between">

          Satellite

          <input type="checkbox" />

        </label>

      </div>

    </div>
  );
}