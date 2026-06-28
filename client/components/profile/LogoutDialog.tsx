"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Loader2,
  LogOut,
  X,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LogoutDialog({
  open,
  onClose,
}: LogoutDialogProps) {
  const router = useRouter();

  const { logout } = useAuth();

  const [loading, setLoading] =
    useState(false);

  if (!open) return null;

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center

        bg-black/50

        backdrop-blur-md

        p-4
      "
    >
      <div
        className="
          relative

          w-full
          max-w-md

          overflow-hidden

          rounded-3xl

          border
          border-slate-200
          dark:border-white/10

          bg-white
          dark:bg-slate-900

          shadow-2xl
        "
      >        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="
            absolute
            right-5
            top-5

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            transition

            hover:bg-slate-100
            dark:hover:bg-white/10
          "
        >
          <X
            size={18}
            className="text-slate-500 dark:text-slate-400"
          />
        </button>

        {/* Content */}
        <div className="px-8 pt-10 pb-8">

          {/* Warning Icon */}
          <div
            className="
              mx-auto

              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-full

              bg-red-100
              dark:bg-red-500/15
            "
          >
            <AlertTriangle
              size={40}
              className="text-red-600"
            />
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6

              text-center

              text-2xl
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            Logout
          </h2>

          {/* Description */}
          <p
            className="
              mt-3

              text-center

              leading-7

              text-slate-600
              dark:text-slate-400
            "
          >
            Are you sure you want to logout
            from your <strong>na𝕏ity</strong>
            account?

            <br />

            You'll need to sign in again to
            access your dashboard.
          </p>
        </div>        {/* Footer */}
        <div
          className="
            flex
            items-center
            gap-4

            border-t
            border-slate-200
            dark:border-white/10

            px-8
            py-6
          "
        >
          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              flex-1

              rounded-xl

              border
              border-slate-300
              dark:border-slate-700

              bg-white
              dark:bg-slate-800

              px-5
              py-3

              font-medium

              text-slate-700
              dark:text-slate-200

              transition-all
              duration-300

              hover:bg-slate-100
              dark:hover:bg-slate-700

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Cancel
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2

              rounded-xl

              bg-red-600

              px-5
              py-3

              font-medium
              text-white

              transition-all
              duration-300

              hover:bg-red-700

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />

                Logging out...
              </>
            ) : (
              <>
                <LogOut size={18} />
                Logout
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}