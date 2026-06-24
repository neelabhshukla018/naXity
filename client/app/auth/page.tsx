"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

export default function AuthPage() {
  const [tab, setTab] = useState<
    "login" | "register"
  >("login");

  return (
    <main
      className="
        min-h-screen

        bg-[#F5F7FB]
        dark:bg-[#07111F]

        flex
        items-center
        justify-center

        p-4
        lg:p-8
      "
    >
      <motion.div
        layout
        transition={{
          duration: 0.35,
        }}
        className="
          w-full
          max-w-7xl

          overflow-hidden

          rounded-[40px]

          border
          border-slate-200
          dark:border-white/10

          bg-white
          dark:bg-[#0F172A]

          shadow-[0_25px_80px_rgba(0,0,0,0.15)]

          grid
          lg:grid-cols-2
        "
      >

                {/* LEFT PANEL */}
        <div
          className="
            relative

            hidden
            lg:flex

            flex-col
            justify-between

            p-12

            overflow-hidden

            bg-gradient-to-br
            from-[#0F172A]
            via-[#13233E]
            to-[#1D4ED8]
          "
        >
          <div
            className="
              absolute
              -top-24
              -right-24

              h-72
              w-72

              rounded-full

              bg-blue-500/30

              blur-3xl
            "
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative z-10"
            >
              {tab === "login" ? (
                <>
                  <h2
                    className="
                      text-5xl
                      font-bold
                      text-white
                    "
                  >
                    Welcome Back!
                  </h2>

                  <p
                    className="
                      mt-5
                      text-lg
                      text-white/80
                      max-w-md
                    "
                  >
                    Login and continue
                    exploring your city
                    smarter with na𝕏ity.
                  </p>
                </>
              ) : (
                <>
                  <h2
                    className="
                      text-5xl
                      font-bold
                      text-white
                    "
                  >
                    Join na𝕏ity
                  </h2>

                  <p
                    className="
                      mt-5
                      text-lg
                      text-white/80
                      max-w-md
                    "
                  >
                    Create an account and
                    unlock AI Travel,
                    Smart Navigation,
                    Live Transport,
                    Parking Finder and
                    Community Reports.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.img
            src="/actions/city.png"
            alt="naXity"

            animate={{
              y: [0, -12, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              relative
              z-10

              w-full
              max-w-[520px]

              mx-auto

              object-contain
            "
          />

          <div className="relative z-10">
            {tab === "login" ? (
              <button
                onClick={() =>
                  setTab("register")
                }
                className="
                  text-white
                  font-medium
                  hover:text-blue-200
                "
              >
                New here?
                Create Account →
              </button>
            ) : (
              <button
                onClick={() =>
                  setTab("login")
                }
                className="
                  text-white
                  font-medium
                  hover:text-blue-200
                "
              >
                Already have an account?
                Login →
              </button>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="
            flex
            flex-col
            justify-center

            p-6
            sm:p-8
            lg:p-12
          "
        >
          <div className="mb-8">
            <h1
              className="
                text-5xl
                font-bold
              "
            >
              na
              <span className="text-blue-600">
                𝕏
              </span>
              ity
            </h1>

            <p
              className="
                mt-3
                text-slate-500
                dark:text-slate-400
              "
            >
              AI Powered Smart City
              Platform
            </p>
          </div>

          <div
            className="
              flex
              gap-3
              mb-8
            "
          >
            <button
              onClick={() =>
                setTab("login")
              }
              className={`
                px-5
                py-2.5
                rounded-xl
                transition-all

                ${
                  tab === "login"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-white/5"
                }
              `}
            >
              Login
            </button>

            <button
              onClick={() =>
                setTab("register")
              }
              className={`
                px-5
                py-2.5
                rounded-xl
                transition-all

                ${
                  tab === "register"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-white/5"
                }
              `}
            >
              Register
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
            >
              {tab === "login" ? (
                <LoginForm />
              ) : (
                <RegisterForm />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}