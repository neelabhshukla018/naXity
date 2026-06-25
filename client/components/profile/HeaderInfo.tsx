"use client";

import {
  BadgeCheck,
  Calendar,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface HeaderInfoProps {
  name: string;
  email: string;
  city?: string;
  state?: string;
}

export default function HeaderInfo({
  name,
  email,
  city,
  state,
}: HeaderInfoProps) {
  return (
    <div className="flex flex-col">

      {/* Name */}

      <div className="flex flex-wrap items-center gap-4">

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {name || "naXity Citizen"}
        </h1>

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          <BadgeCheck size={18} />
          Verified
        </div>

      </div>

      {/* Email + Location */}

      <div className="mt-5 flex flex-wrap gap-6 text-slate-600 dark:text-slate-300">

        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span>{email}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span>
            {city && state
              ? `${city}, ${state}`
              : "Location not added"}
          </span>
        </div>

      </div>

      {/* Badges */}

      <div className="mt-8 flex flex-wrap gap-3">

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-sm
            font-medium
            text-emerald-700
            dark:bg-emerald-900/30
            dark:text-emerald-300
          "
        >
          <ShieldCheck size={18} />
          Verified Citizen
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
            dark:bg-blue-900/30
            dark:text-blue-300
          "
        >
          <Sparkles size={18} />
          Citizen ID • NX-10452
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-violet-100
            px-4
            py-2
            text-sm
            font-medium
            text-violet-700
            dark:bg-violet-900/30
            dark:text-violet-300
          "
        >
          <Calendar size={18} />
          Member Since 2026
        </div>

      </div>

    </div>
  );
}