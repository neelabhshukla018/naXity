"use client";

import { MapPin } from "lucide-react";

const pins = [
  {
    id: 1,
    top: "12%",
    left: "18%",
    delay: "0s",
    size: 18,
  },
  {
    id: 2,
    top: "24%",
    left: "78%",
    delay: "2s",
    size: 20,
  },
  {
    id: 3,
    top: "58%",
    left: "14%",
    delay: "4s",
    size: 16,
  },
  {
    id: 4,
    top: "68%",
    left: "84%",
    delay: "6s",
    size: 22,
  },
  {
    id: 5,
    top: "82%",
    left: "46%",
    delay: "3s",
    size: 18,
  },
  {
    id: 6,
    top: "38%",
    left: "56%",
    delay: "5s",
    size: 17,
  },
];

export default function FloatingPins() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pins.map((pin) => (
        <div
          key={pin.id}
          className="absolute animate-pinFloat"
          style={{
            top: pin.top,
            left: pin.left,
            animationDelay: pin.delay,
          }}
        >
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full animate-pinPulse bg-blue-500/20 dark:bg-indigo-500/20" />

          {/* Pin */}
          <MapPin
            size={pin.size}
            className="
              relative
              text-blue-500
              dark:text-indigo-400
              drop-shadow-lg
            "
          />
        </div>
      ))}
    </div>
  );
}