"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className="
        flex
        justify-end
        items-center

        px-10
        pt-8
      "
    >
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <div
          className="
            flex
            items-center

            bg-white/90
            dark:bg-slate-900/90

            backdrop-blur-xl

            rounded-full

            p-1

            shadow-lg

            border
            border-white/50
            dark:border-slate-700
          "
        >
          <button
            onClick={() => setTheme("light")}
            className={`
              h-10
              w-10

              rounded-full

              flex
              items-center
              justify-center

              transition-all

              ${
                theme === "light"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500"
              }
            `}
          >
            <Sun size={18} />
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`
              h-10
              w-10

              rounded-full

              flex
              items-center
              justify-center

              transition-all

              ${
                theme === "dark"
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-slate-500"
              }
            `}
          >
            <Moon size={18} />
          </button>
        </div>

        {/* Avatar */}
        <img
          src="/actions/avtaar.png"
          alt="Profile"
          className="
            h-14
            w-14

            rounded-full

            object-cover

            border-2
            border-white

            shadow-md
          "
        />
      </div>
    </header>
  );
}