"use client";

import {
  Home,
  Compass,
  Car,
  Search,
  ParkingCircle,
  Bus,
  ShieldAlert,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import WeatherCard from "@/components/weather/WeatherCard";

const navItems = [
  { name: "Home", icon: Home, active: true },
  { name: "Explore", icon: Compass },
  { name: "Rides", icon: Car },
  { name: "Discover", icon: Search },
  { name: "Parking", icon: ParkingCircle },
  { name: "Transport", icon: Bus },
  { name: "Emergency", icon: ShieldAlert },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside
      className="
        w-[280px]
        h-screen
        sticky
        top-0

        flex
        flex-col

        bg-white
        dark:bg-slate-950

        border-r
        border-slate-200
        dark:border-slate-800

        transition-all
        duration-300
      "
    >
      {/* Logo */}
      <div className="px-8 pt-8 pb-8">
        <h1
          className="
            text-3xl
            font-bold
            tracking-tight

            text-slate-900
            dark:text-white
          "
        >
          na
          <span className="text-blue-600">
            𝕏
          </span>
          ity
        </h1>
      </div>

      {/* Navigation */}
      <nav className="px-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.name}
                className={`
                  flex
                  items-center
                  gap-3

                  px-4
                  py-3

                  rounded-2xl

                  cursor-pointer

                  transition-all
                  duration-300

                  ${
                    item.active
                      ? `
                        bg-blue-100
                        text-blue-600

                        dark:bg-blue-500/20
                        dark:text-blue-400
                      `
                      : `
                        text-slate-600
                        dark:text-slate-400

                        hover:bg-slate-100
                        dark:hover:bg-slate-900
                      `
                  }
                `}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto px-3 pb-3">
        <WeatherCard />

        
      </div>
    </aside>
  );
}