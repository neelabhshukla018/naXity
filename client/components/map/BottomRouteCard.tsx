"use client";

export default function BottomRouteCard() {
  return (
    <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 dark:bg-black/40 backdrop-blur-xl p-5 shadow-xl">

      <div className="grid grid-cols-5 gap-4">

        <div>

          <p className="text-sm text-gray-500">

            Distance

          </p>

          <h4 className="font-semibold">

            8.2 km

          </h4>

        </div>

        <div>

          <p className="text-sm text-gray-500">

            ETA

          </p>

          <h4 className="font-semibold">

            16 min

          </h4>

        </div>

        <div>

          <p className="text-sm text-gray-500">

            Traffic

          </p>

          <h4 className="font-semibold">

            Moderate

          </h4>

        </div>

        <div>

          <p className="text-sm text-gray-500">

            Fuel

          </p>

          <h4 className="font-semibold">

            ₹124

          </h4>

        </div>

        <button className="rounded-xl bg-blue-600 text-white font-medium">

          Start Navigation

        </button>

      </div>

    </div>
  );
}