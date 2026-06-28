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
    {
      name: "Explore",
      icon: Compass,
      href: "/explore",
    },
    {
      name: "Rides",
      icon: Car,
      href: "/rides",
    },
        {
      name: "Emergency",
      icon: ShieldAlert,
      href: "/emergency",
    },
   
    {
      name: "Parking",
      icon: ParkingCircle,
      href: "/parking",
    },
    
    {
      name: "Transport",
      icon: Bus,
      href: "/transport",
    },
  

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

        w-[290px]
        h-screen

        sticky
        top-0

        flex
        flex-col

        overflow-hidden

        backdrop-blur-2xl

        bg-white/70
        dark:bg-[#0F172A]/70

        border-r
        border-white/20

        shadow-[2_8px_32px_rgba(31,38,135,0.15)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-12
          bottom-24

          h-48
          w-48

          rounded-full

          bg-blue-500/20

          blur-3xl

          pointer-events-none
        "
      />

      {/* Logo */}

      <div className="px-8 pt-6 pb-4">
        <h1 className="text-[48px] font-bold tracking-tight select-none">
          na

          <span
            className="
              text-blue-600

              drop-shadow-[0_0_18px_rgba(59,130,246,0.7)]
            "
          >
            𝕏
          </span>

          ity
        </h1>
      </div>

      {/* Navigation */}

      <div
        className="
          flex-1

          overflow-y-auto

          px-4

          scrollbar-hide
        "
      >
        <nav>
          <ul className="space-y-1">
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

                      rounded-2xl

                      px-4
                      py-3

                      text-[15px]
                      font-medium

                      text-slate-700
                      dark:text-slate-300

                      transition-all
                      duration-300

                      hover:bg-cyan-200
                      dark:hover:bg-cyan-200/20

                      hover:translate-x-1
                    "
                  >
                    <Icon
                      size={20}
                      className="
                        transition-transform
                        duration-300

                        group-hover:scale-110
                      "
                    />

                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}

      <div
        className="
          shrink-0

          space-y-3

          px-3
          pb-4
          pt-3
        "
      >
        {/* Weather Card */}

        <div
          className="
            overflow-hidden

            rounded-3xl
          "
        >
          <WeatherCard />
        </div>        {/* Profile / Auth */}

        {loading ? (
          <div
            className="
              h-[72px]
              rounded-3xl

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
                group

                cursor-pointer

                rounded-3xl

                border
                border-blue-100
                dark:border-blue-900/40

                bg-blue-100/80
                dark:bg-[#16233D]/80

                backdrop-blur-xl

                px-3
                py-3

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl

                hover:bg-blue-200/80
                dark:hover:bg-[#1B2C4A]
              "
            >
              <div className="flex items-center gap-3">
                {user?.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="
                      h-10
                      w-10

                      rounded-full

                      object-cover

                      ring-2
                      ring-blue-400/40
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-full

                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-400

                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {user?.name
                      ?.charAt(0)
                      ?.toUpperCase() || "U"}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      truncate

                      text-[15px]
                      font-semibold

                      text-slate-800
                      dark:text-white
                    "
                  >
                    {user?.name}
                  </h3>

                  <p
                    className="
                      truncate

                      text-xs

                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {user?.city},{" "}
                    {user?.state ===
                    "Uttar Pradesh"
                      ? "UP"
                      : user?.state}
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="
                    text-slate-400

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </div>
            </div>
          </Link>
        ) : (
          <Link
            href="/auth"
            className="
              group

              flex
              items-center
              justify-center
              gap-2

              rounded-3xl

              border
              border-blue-100
              dark:border-blue-900/40

              bg-blue-100/80
              dark:bg-[#16233D]/80

              backdrop-blur-xl

              px-4
              py-3

              font-medium

              text-slate-800
              dark:text-slate-200

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl

              hover:bg-blue-200
              dark:hover:bg-[#1B2C4A]
            "
          >
            <span>Get Started</span>

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