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
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home },
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
    <aside className="w-72 h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          na<span className="text-blue-500">X</span>ity
        </h1>
      </div>

      <nav className="px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.name}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 cursor-pointer transition hover:bg-white/10"
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}