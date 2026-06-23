"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const actions = [
  {
    title: "Rides",
    desc: "Book rides instantly",
    image: "/actions/car.png",
  },
  {
    title: "Food",
    desc: "Discover restaurants",
    image: "/actions/burger.png",
  },
  {
    title: "Parking",
    desc: "Find parking nearby",
    image: "/actions/parking.png",
  },
  {
    title: "Transport",
    desc: "Track public transit",
    image: "/actions/bus.png",
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {actions.map((item) => (
        <div
          key={item.title}
          className="
            relative
            overflow-hidden

            h-[190px]

            rounded-[30px]

            bg-white/75
            dark:bg-slate-900/75

            border
            border-white/60
            dark:border-slate-700

            backdrop-blur-xl

            shadow-lg

            p-6

            hover:-translate-y-1
            hover:shadow-xl

            transition-all
            duration-300
          "
        >
          {/* Content */}
          <div className="relative z-10">
            <h3
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-600
                dark:text-slate-300

                max-w-[120px]
              "
            >
              {item.desc}
            </p>

            <button
              className="
                mt-6

                h-10
                w-10

                rounded-full

                bg-white
                dark:bg-slate-800

                text-slate-900
                dark:text-white

                shadow-sm

                flex
                items-center
                justify-center
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Illustration */}
          <div
            className="
              absolute

              right-3
              bottom-3

              w-[120px]
              h-[120px]
            "
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}