"use client";

import {
  Car,
  ParkingCircle,
  CloudSun,
  Utensils,
} from "lucide-react";

const buttons = [
  Car,
  ParkingCircle,
  CloudSun,
  Utensils,
];

export default function FloatingButtons() {
  return (
    <div className="absolute right-5 bottom-36 flex flex-col gap-3">

      {buttons.map((Icon, index) => (
        <button
          key={index}
          className="rounded-full bg-blue-600 text-white p-3 shadow-lg"
        >
          <Icon size={20} />
        </button>
      ))}

    </div>
  );
}