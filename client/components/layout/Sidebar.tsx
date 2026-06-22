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
  SunMedium,
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
        border-r
        border-white/10
        bg-[var(--glass-bg)]
        backdrop-blur-2xl
      "
    >
      {/* Logo */}
      <div className="px-8 pt-8 pb-6">
        <h1 className="text-4xl font-bold tracking-tight">
          na<span className="text-blue-600">𝕏</span>ity
        </h1>
      </div>

      {/* Navigation */}
      <nav className="px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.name}
                className={`
                  flex items-center gap-2
                  px-4 py-3
                  rounded-2xl
                  cursor-pointer
                  transition-all duration-300

                  ${
                    item.active
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                      : "hover:bg-white/10"
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
    <div className="p-4 pt-2">
       {/* Weather Card */}
<div
  className="
    rounded-2xl
    border
    border-white/10
    bg-white/20
    dark:bg-white/5
    backdrop-blur-xl
    p-4
    shadow-lg
  "
>
  <div className="flex items-center gap-3">
    <SunMedium
      className="text-yellow-500 animate-pulse"
      size={22}
    />

    <span className="text-lg font-semibold">
      28°C
    </span>
  </div>

  <p className="mt-2 text-sm opacity-70">
    Prayagraj, India
  </p>
</div>

        {/* Logout */}
        <button
          className="
            mt-4
            w-full
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            py-2.5
            text-sm
            font-medium
            bg-red-500/10
            text-red-500
            hover:bg-red-500/20
            transition-all
          "
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}