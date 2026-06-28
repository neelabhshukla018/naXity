"use client";

import Link from "next/link";

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
  ArrowRight,
} from "lucide-react";

import WeatherCard from "@/components/weather/WeatherCard";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const {
    user,
    isLoggedIn,
    loading,
  } = useAuth();

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Explore", icon: Compass, href: "/explore" },
    { name: "Rides", icon: Car, href: "/rides" },
    { name: "Discover", icon: Search, href: "/discover" },
    { name: "Parking", icon: ParkingCircle, href: "/parking" },
    { name: "Transport", icon: Bus, href: "/transport" },
    { name: "Emergency", icon: ShieldAlert, href: "/emergency" },

    ...(isLoggedIn
      ? [
          {
            name: "Profile",
            icon: User,
            href: "/profile",
          },
        ]
      : []),

    {
      name: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <aside
      className="
        relative

        w-[280px]
        h-screen

        sticky
        top-0

        flex
        flex-col

        backdrop-blur-2xl

        bg-white/70
        dark:bg-[#0F172A]/70

        border-r
        border-white/20

        shadow-[2_8px_32px_rgba(31,38,135,0.15)]
      "
    >      <div
        className="
          absolute
          bottom-20
          -left-10

          w-40
          h-40

          bg-blue-500/20

          rounded-full

          blur-3xl

          pointer-events-none
        "
      />

      <div className="px-8 pt-5 pb-3">
    <h1 className="text-[52px] font-bold tracking-tight">
  na

  <span
    className="
      text-blue-600
      drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]
    "
  >
    𝕏
  </span>

  ity
</h1>

      </div>    
      
        <nav className="px-4">
        <ul className="space-y-0.5 mt-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
  className="
  group

  flex
  items-center
  gap-3

  px-4
  py-3

  rounded-2xl

  text-sm
  font-medium

  text-slate-700
  dark:text-slate-300

  transition-all
  duration-300

  hover:-translate-y-1
  hover:scale-[1.02]

  hover:bg-cyan-200
  dark:hover:bg-cyan-200/30
"
                >
                  <Icon size={20} />

                  <span>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>     
       <div className="mt-auto px-4 pb-4">
        <div
          className="
            mb-2

            rounded-2xl

            bg-white/30
            dark:bg-white/5

            backdrop-blur-xl
          "
        >
          <WeatherCard />
        </div>
{loading ? (
  <div
    className="
      h-16
      rounded-2xl
      animate-pulse

      bg-blue-50
      dark:bg-[#16233D]

      border
      border-blue-100
      dark:border-blue-900/40
    "
  />
) : isLoggedIn ? (
  <Link href="/profile">
    <div
      className="
        cursor-pointer

        p-3

        rounded-2xl

        bg-blue-200
        dark:bg-[#16233D]/70

        backdrop-blur-xl

        border
        border-blue-100
        dark:border-blue-900/40

        shadow-lg

        transition-all
        duration-300

        hover:bg-blue-300
        dark:hover:bg-[#1B2C4A]

        hover:shadow-xl
      "
    >
      <div className="flex items-center gap-3">
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt={user.name}
            className="
              h-11
              w-11
              rounded-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-blue-500
              to-cyan-400

              font-semibold
              text-white
            "
          >
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}

        <div className="min-w-0">
          <p
            className="
              truncate
              font-semibold

              text-slate-800
              dark:text-white
            "
          >
            {user?.name}
          </p>

          <p
            className="
              truncate
              text-xs

              text-slate-500
              dark:text-slate-400
            "
          >
            {user?.city}, {user?.state}
          </p>
        </div>
      </div>
    </div>
  </Link>
) : (
  <Link
    href="/auth"
    className="
      group

      flex
      w-full

      items-center
      justify-center
      gap-2

      py-3

      rounded-2xl

      bg-blue-50/80
      dark:bg-[#16233D]/70

      backdrop-blur-xl

      border
      border-blue-100
      dark:border-blue-900/40

      text-slate-800
      dark:text-slate-200

      shadow-lg

      transition-all
      duration-300

      hover:bg-blue-100/80
      dark:hover:bg-[#1B2C4A]

      hover:shadow-xl
    "
  >
    <span className="font-medium">
      Get Started
    </span>

    <ArrowRight
      size={18}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>
)}
      </div>
    </aside>
  );
}