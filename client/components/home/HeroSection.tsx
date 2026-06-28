"use client";

import { useAuth } from "@/context/AuthContext";

import CityBackground from "./CityBackground";
import SearchBar from "./SearchBar";
import QuickActions from "./QuickActions";

export default function HeroSection() {
  const { user, isLoggedIn } = useAuth();

  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[36px]

        h-[540px]

        bg-white/30
        dark:bg-slate-900/40

        backdrop-blur-xl

        border
        border-white/50
        dark:border-slate-700

        shadow-xl

        transition-all
        duration-300
      "
    >
      <CityBackground />

      <div
        className="
          relative
          z-10

          h-full

          p-10
        "
      >
        <p
          className="
            text-slate-600
            dark:text-slate-300

            font-medium
          "
        >
          Good Morning,{" "}
          {isLoggedIn
            ? user?.name?.split(" ")[0]
            : "Guest"}{" "}
          👋
        </p>

        <h1
          className="
            mt-3

            text-7xl

            font-bold

            text-slate-900
            dark:text-white
          "
        >
          Your City. Your Way.
        </h1>

        <p
          className="
            mt-4

            text-lg

            text-slate-600
            dark:text-slate-300
          "
        >
          Navigate, explore and live your city smarter with naXity.
        </p>

        <div className="mt-6 max-w-5xl">
          <SearchBar />
        </div>

        <div className="mt-8">
          <QuickActions />
        </div>
      </div>
    </section>
  );
}