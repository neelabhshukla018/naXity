"use client";

import { Sun, Moon, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isLoggedIn = false; // Replace with JWT auth state

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className="
        h-20
        flex
        items-center
        justify-end
        px-10
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
            border-slate-200
            dark:border-white/10
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

        {/* Profile Avatar After Login */}
        {isLoggedIn && (
          <button
            className="
              h-12
              w-12

              rounded-full

              overflow-hidden

              border
              border-slate-200
              dark:border-white/10

              shadow-lg
            "
          >
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </button>
        )}
      </div>
    </header>
  );
}