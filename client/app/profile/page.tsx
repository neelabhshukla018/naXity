"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();

    router.push("/");
    router.refresh();
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#F5F7FB]
        dark:bg-[#07111F]
        p-6
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto

          rounded-3xl

          bg-white
          dark:bg-[#0F172A]

          border
          border-slate-200
          dark:border-white/10

          p-8
        "
      >
        <div className="flex items-center gap-5">
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.name}
              className="
                w-24
                h-24
                rounded-full
                object-cover
              "
            />
          ) : (
            <div
              className="
                w-24
                h-24
                rounded-full

                bg-blue-600
                text-white

                flex
                items-center
                justify-center

                text-3xl
                font-bold
              "
            >
              {user?.name?.charAt(0)}
            </div>
          )}

          <div>
            <h1 className="text-3xl font-bold">
              {user?.name}
            </h1>

            <p className="text-slate-500">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <div>
            <p className="text-sm text-slate-500">
              City
            </p>

            <p className="font-medium">
              {user?.city}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              State
            </p>

            <p className="font-medium">
              {user?.state}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-medium">
              {user?.email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            mt-10

            flex
            items-center
            gap-2

            px-5
            py-3

            rounded-2xl

            bg-red-500/10
            text-red-500

            hover:bg-red-500/20

            transition-all
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </main>
  );
}