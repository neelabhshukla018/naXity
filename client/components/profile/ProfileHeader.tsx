"use client";

import { useState } from "react";

import AvatarUploader from "./AvatarUploader";
import LogoutDialog from "./LogoutDialog";

import {
  Mail,
  MapPin,
  CalendarDays,
  Pencil,
  Share2,
  LogOut,
  BadgeCheck,
  Check,
  Sparkles,
} from "lucide-react";

interface Props {
  formData: {
    name: string;
    email: string;
    imageUrl: string;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<any>
  >;
}

export default function ProfileHeader({
  formData,
  setFormData,
}: Props) {
  const [logoutOpen, setLogoutOpen] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const handleEditProfile = () => {
    document
      .getElementById("profile-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${formData.name}'s Profile`,
          text: "Check out my naXity profile.",
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(
        url
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section
        className="
          relative

          overflow-hidden
             h-[540px] 

              w-[100%]
          rounded-[36px]

          border
          border-slate-200/80
          dark:border-slate-800

          bg-gradient-to-br
          from-white
          via-slate-50
          to-blue-50

          dark:from-[#07111F]
          dark:via-[#0B1728]
          dark:to-[#12243D]

          shadow-[0_30px_80px_rgba(15,23,42,.08)]

          transition-all
          duration-500
        "
      >        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          {/* City Background */}

          <img
            src="/images/profile-bg.png"
            alt=""
            className="
              absolute

              right-0
              top-0

              h-full
              w-[90%]

              object-cover
              object-right

              opacity-70
              dark:opacity-30

              select-none
              pointer-events-none
            "
          />

          {/* Left Gradient */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r

              from-white
              via-white/90
              to-transparent

              dark:from-[#07111F]
              dark:via-[#07111F]/85
              dark:to-transparent
            "
          />

          {/* Blue Glow */}

          <div
            className="
              absolute

              -left-28
              -top-24

              h-96
              w-96

              rounded-full

              bg-blue-500/15

              blur-[120px]
            "
          />

          {/* Cyan Glow */}

          <div
            className="
              absolute

              right-0
              bottom-0

              h-80
              w-80

              rounded-full

              bg-cyan-400/10

              blur-[120px]
            "
          />

        </div>

        {/* Main Content */}

        <div
          className="
            relative
            z-10

            p-8

            lg:p-6
          "
        >

          <div
            className="
              grid

              gap-0

              lg:grid-cols-[230px_1fr_340px]
            "
          >

            {/* Avatar */}

            <div
              className="
                flex
                justify-center

                lg:justify-start
              "
            >

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

            {/* Profile Info */}

            <div className="flex flex-col justify-center">

              <div className="flex flex-wrap items-center gap-4">

                <h1
                  className="
                    text-5xl
                    font-bold
                    tracking-tight

                    text-slate-900
                    dark:text-white
                  "
                >
                  {formData.name || "Citizen"}
                </h1>

                {/* Verified Badge */}

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    rounded-full

                    bg-blue-100
                    dark:bg-blue-900/30

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    text-blue-700
                    dark:text-blue-300
                  "
                >
                  <BadgeCheck
                    size={18}
                  />

                  Verified
                </div>

              </div>

              <p
                className="
                  mt-3

                  text-lg

                  text-slate-500
                  dark:text-slate-400
                "
              >
                Building the future of
                smarter cities with
                naXity.
              </p>

              <div
                className="
                  mt-8

                  grid

                  gap-5

                  md:grid-cols-2
                "
              >

                <div className="flex items-center gap-3">

                  <Mail
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    {formData.email}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <MapPin
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    Lucknow, Uttar Pradesh
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <CalendarDays
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    Joined January 2026
                  </span>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">                {/* Profile Badges */}

                <div
                  className="
                    rounded-full

                    bg-blue-100
                    dark:bg-blue-900/30

                    px-5
                    py-2.5

                    text-sm
                    font-semibold

                    text-blue-700
                    dark:text-blue-300
                  "
                >
                  Citizen ID • NX-10452
                </div>

                <div
                  className="
                    rounded-full

                    bg-emerald-100
                    dark:bg-emerald-900/30

                    px-5
                    py-2.5

                    text-sm
                    font-semibold

                    text-emerald-700
                    dark:text-emerald-300
                  "
                >
                  Active Member
                </div>

                <div
                  className="
                    rounded-full

                    bg-violet-100
                    dark:bg-violet-900/30

                    px-5
                    py-2.5

                    text-sm
                    font-semibold

                    text-violet-700
                    dark:text-violet-300
                  "
                >
                  Level 5 Explorer
                </div>

              </div>

              {/* Action Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                {/* Edit */}

                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="
                    group

                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500

                    px-6
                    py-3.5

                    font-semibold
                    text-white

                    shadow-lg
                    shadow-blue-500/20

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-blue-500/40
                  "
                >
                  <Pencil
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  />

                  Edit Profile
                </button>

                {/* Share */}

                <button
                  type="button"
                  onClick={handleShare}
                  className="
                    group

                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    border
                    border-slate-200
                    dark:border-slate-700

                    bg-white/80
                    dark:bg-slate-800/70

                    px-6
                    py-3.5

                    font-semibold

                    text-slate-700
                    dark:text-slate-200

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:bg-blue-50

                    dark:hover:bg-slate-700
                  "
                >
                  {copied ? (
                    <>
                      <Check
                        size={18}
                        className="text-emerald-500"
                      />

                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-12
                        "
                      />

                      Share Profile
                    </>
                  )}
                </button>

                {/* Logout */}

                <button
                  type="button"
                  onClick={() =>
                    setLogoutOpen(true)
                  }
                  className="
                    group

                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    border
                    border-red-200
                    dark:border-red-800

                    bg-red-50
                    dark:bg-red-900/20

                    px-6
                    py-3.5

                    font-semibold

                    text-red-600
                    dark:text-red-400

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-red-100

                    dark:hover:bg-red-900/30
                  "
                >
                  <LogOut
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  />

                  Logout
                </button>

              </div>

            </div>            {/* Smart City Overview */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[30px]

                border
                border-slate-200
                dark:border-slate-700

                bg-white/85
                dark:bg-slate-900/70

                backdrop-blur-2xl

                p-7

                shadow-xl
              "
            >

              {/* Background Glow */}

              <div
                className="
                  absolute
                  -top-16
                  -right-16

                  h-48
                  w-48

                  rounded-full

                  bg-blue-500/10

                  blur-[100px]
                "
              />

              <div className="relative z-10">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12

                      items-center
                      justify-center

                      rounded-2xl

                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-500

                      text-white

                      shadow-lg
                    "
                  >
                    <Sparkles size={22} />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold

                        text-slate-900
                        dark:text-white
                      "
                    >
                      Smart City
                    </h3>

                    <p
                      className="
                        text-sm

                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Live Overview
                    </p>

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  {/* Weather */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      bg-slate-50
                      dark:bg-slate-800/60

                      p-4

                      transition

                      hover:scale-[1.02]
                    "
                  >

                    <div>

                      <p
                        className="
                          text-sm

                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Weather
                      </p>

                      <h4
                        className="
                          mt-1

                          font-semibold

                          text-slate-900
                          dark:text-white
                        "
                      >
                        28°C • Sunny
                      </h4>

                    </div>

                    <span className="text-3xl">
                      ☀️
                    </span>

                  </div>

                  {/* AQI */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      bg-slate-50
                      dark:bg-slate-800/60

                      p-4

                      transition

                      hover:scale-[1.02]
                    "
                  >

                    <div>

                      <p
                        className="
                          text-sm

                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Air Quality
                      </p>

                      <h4
                        className="
                          mt-1

                          font-semibold

                          text-emerald-600
                          dark:text-emerald-400
                        "
                      >
                        Good
                      </h4>

                    </div>

                    <div
                      className="
                        rounded-full

                        bg-emerald-100
                        dark:bg-emerald-900/30

                        px-4
                        py-2

                        text-sm
                        font-semibold

                        text-emerald-700
                        dark:text-emerald-300
                      "
                    >
                      AQI 42
                    </div>

                  </div>

                  {/* Traffic */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      bg-slate-50
                      dark:bg-slate-800/60

                      p-4

                      transition

                      hover:scale-[1.02]
                    "
                  >

                    <div>

                      <p
                        className="
                          text-sm

                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Traffic
                      </p>

                      <h4
                        className="
                          mt-1

                          font-semibold

                          text-blue-600
                          dark:text-blue-400
                        "
                      >
                        Normal
                      </h4>

                    </div>

                    <span
                      className="
                        rounded-full

                        bg-blue-100
                        dark:bg-blue-900/30

                        px-4
                        py-2

                        text-sm
                        font-semibold

                        text-blue-700
                        dark:text-blue-300
                      "
                    >
                      18 mins
                    </span>

                  </div>

                  {/* Emergency */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      bg-slate-50
                      dark:bg-slate-800/60

                      p-4

                      transition

                      hover:scale-[1.02]
                    "
                  >                    <div>

                      <p
                        className="
                          text-sm

                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Emergency
                      </p>

                      <h4
                        className="
                          mt-1

                          font-semibold

                          text-red-600
                          dark:text-red-400
                        "
                      >
                        Services Ready
                      </h4>

                    </div>

                    <span
                      className="
                        rounded-full

                        bg-red-100
                        dark:bg-red-900/30

                        px-4
                        py-2

                        text-sm
                        font-semibold

                        text-red-700
                        dark:text-red-300
                      "
                    >
                      24×7
                    </span>

                  </div>

                </div>

              

               

              </div>

            </div>

          </div>

        </div>

        {/* Decorative Blur */}

        <div
          className="
            pointer-events-none

            absolute

            -bottom-28
            -right-28

            h-72
            w-72

            rounded-full

            bg-blue-500/10

            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute

            top-0
            left-1/2

            h-64
            w-64

            -translate-x-1/2

            rounded-full

            bg-cyan-400/10

            blur-[120px]
          "
        />

      </section>

      <LogoutDialog
        open={logoutOpen}
        onClose={() =>
          setLogoutOpen(false)
        }
      />

    </>
  );
}