"use client";

import {
  User,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function ProfileStats() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <div className="rounded-3xl bg-white/70
dark:bg-[#0B1220]/70
backdrop-blur-2xl p-6 shadow-xl border border-white/20 dark:border-slate-800">
        <User className="text-blue-600 mb-3" />

        <p className="text-gray-500 dark:text-gray-400">
          Account Type
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
          Citizen
        </h3>
      </div>

      <div className="rounded-3xl bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur-xl p-6 shadow-xl border border-white/20 dark:border-slate-800">
        <ShieldCheck className="text-green-500 mb-3" />

        <p className="text-gray-500 dark:text-gray-400">
          Verification
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
          Verified
        </h3>
      </div>

      <div className="rounded-3xl bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur-xl p-6 shadow-xl border border-white/20 dark:border-slate-800">
        <Calendar className="text-purple-500 mb-3" />

        <p className="text-gray-500 dark:text-gray-400">
          Member Since
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
          2026
        </h3>
      </div>
    </div>
  );
}