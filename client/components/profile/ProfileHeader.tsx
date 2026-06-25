"use client";

import AvatarUploader from "./AvatarUploader";

import {
  BadgeCheck,
  Mail,
  MapPin,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  Pencil,
  Share2,
  QrCode,
} from "lucide-react";

interface Props {
  formData: {
    name: string;
    email: string;
    imageUrl: string;
  };

  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProfileHeader({
  formData,
  setFormData,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/40
        dark:border-white/10
        bg-white/70
        dark:bg-slate-900/60
        backdrop-blur-3xl
        shadow-[0_20px_70px_rgba(15,23,42,.10)]
      "
    >
      {/* Background */}

      <div className="absolute inset-0">

        <img
          src="/images/profile-bg.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-15
            dark:opacity-10
            scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
            dark:from-slate-900
            dark:via-slate-900/80
            dark:to-transparent
          "
        />

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/15 blur-[120px]" />

      </div>

      {/* Main */}

      <div className="relative z-10 p-8 lg:p-10">

        <div className="grid gap-10 lg:grid-cols-[180px_1fr_330px]">

          {/* Avatar */}

          <div className="flex justify-center lg:justify-start">

            <AvatarUploader
              imageUrl={formData.imageUrl}
              onUploadSuccess={(url) =>
                setFormData((prev: any) => ({
                  ...prev,
                  imageUrl: url,
                }))
              }
            />

          </div>

          {/* Identity */}

          <div className="flex flex-col justify-center">

            <div className="flex flex-wrap items-center gap-3">

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {formData.name || "Citizen"}
              </h1>

             

            </div>

            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">

              <div className="flex items-center gap-2">

                <Mail size={18} />

                {formData.email}

              </div>

              <div className="flex items-center gap-2">

                <MapPin size={18} />

                Lucknow, Uttar Pradesh

              </div>

            </div>

            <div className="mt-7 flex flex-wrap gap-3">

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
                <ShieldCheck size={16} />

                Verified Citizen

              </div>

              <div
                className="
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
                <CalendarDays size={16} />

                Member Since 2026

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-blue-700
                "
              >
                <Pencil size={17} />

                Edit Profile

              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  bg-white/70
                  dark:bg-slate-800/60
                  px-5
                  py-3
                  text-sm
                  font-medium
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500
                "
              >
                <Share2 size={17} />

                Share

              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  bg-white/70
                  dark:bg-slate-800/60
                  px-5
                  py-3
                  text-sm
                  font-medium
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500
                "
              >
                <QrCode size={17} />

                QR Code

              </button>

            </div>

          </div>

                    {/* Smart City Status */}

          <div className="flex flex-col gap-5">

            <div
              className="
                rounded-3xl
                border
                border-white/40
                dark:border-white/10
                bg-white/60
                dark:bg-slate-800/60
                backdrop-blur-2xl
                p-6
                shadow-lg
              "
            >

              <div className="flex items-center gap-2">

                <Sparkles
                  size={18}
                  className="text-blue-600"
                />

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Smart City Status
                </h3>

              </div>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 dark:text-slate-400">
                    Weather
                  </span>

                  <span className="font-semibold text-slate-900 dark:text-white">
                    28°C • Sunny
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 dark:text-slate-400">
                    AQI
                  </span>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Good
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 dark:text-slate-400">
                    Traffic
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Normal
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 dark:text-slate-400">
                    Emergency
                  </span>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-300">
                    Ready
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      

                {/* Floating Decorations */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            h-72
            w-72
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            top-0
            left-1/3
            h-60
            w-60
            rounded-full
            bg-violet-500/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-12
            left-20
            h-40
            w-40
            rounded-full
            bg-cyan-400/10
            blur-[90px]
          "
        />

      </div>

    </section>
  );
}