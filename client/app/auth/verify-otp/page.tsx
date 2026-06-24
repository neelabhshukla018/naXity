"use client";

import {
  useState,
  useEffect,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function VerifyOtpPage() {

const router = useRouter();

const { fetchUser } = useAuth();

const searchParams =
  useSearchParams();

  const email =
    searchParams.get("email") || "";

const [otp, setOtp] =
  useState(["", "", "", "", "", ""]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

    const [timer, setTimer] =
  useState(60);

    const handleOtpChange = (
  value: string,
  index: number
) => {
  if (!/^\d*$/.test(value)) return;

  const newOtp = [...otp];

  newOtp[index] =
    value.slice(-1);

  setOtp(newOtp);

  if (
    value &&
    index < 5
  ) {
    const next =
      document.getElementById(
        `otp-${index + 1}`
      );

    (next as HTMLInputElement)?.focus();
  }
};

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  index: number
) => {
  if (
    e.key === "Backspace" &&
    !otp[index] &&
    index > 0
  ) {
    const prev =
      document.getElementById(
        `otp-${index - 1}`
      );

    (prev as HTMLInputElement)?.focus();
  }
};

useEffect(() => {
  if (timer <= 0) return;

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);

  const handleVerify = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "http://localhost:5000/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            otp: otp.join(""),
          }),
        }
      );

      const data =
        await res.json();

      if (!data.success) {
        setError(
          data.message ||
            "OTP verification failed"
        );

        return;
      }

      setSuccess(
        "Email verified successfully"
      );

setTimeout(async () => {
  await fetchUser();

  router.push("/");
  router.refresh();
}, 1500);

          } catch (err) {
      console.error(err);

      setError(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp =
    async () => {
      try {
        setError("");
        setSuccess("");

        const res = await fetch(
          "http://localhost:5000/api/auth/resend-otp",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              email,
            }),
          }
        );

        const data =
          await res.json();

        if (!data.success) {
          setError(
            data.message ||
              "Failed to resend OTP"
          );

          return;
        }

      setSuccess(
  "OTP sent successfully"
);

setTimer(60);
      } catch (err) {
        console.error(err);

        setError(
          "Failed to resend OTP"
        );
      }
    };

  return (
    <main
      className="
        relative
        min-h-screen

        bg-[#F5F7FB]
        dark:bg-[#07111F]

        flex
        items-center
        justify-center

        overflow-hidden
        p-6
      "
    >
      <div
        className="
          absolute
          top-0
          left-0

          h-96
          w-96

          rounded-full

          bg-blue-500/20

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          h-96
          w-96

          rounded-full

          bg-cyan-500/20

          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10

          w-full
          max-w-md

                    rounded-[32px]

          bg-white/70
          dark:bg-[#0F172A]/80

          backdrop-blur-xl

          border
          border-white/30
          dark:border-white/10

          shadow-[0_20px_60px_rgba(0,0,0,0.15)]

          p-8
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              mb-4

              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              to-cyan-500

              text-white

              text-2xl
            "
          >
            🔐
          </div>

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Verify Your Email
          </h1>

          <p
            className="
              mt-3
              text-slate-500
              dark:text-slate-400
            "
          >
            Enter the verification
            code sent to
          </p>

          <p
            className="
              mt-2

              font-semibold

              text-blue-600
              dark:text-blue-400

              break-all
            "
          >
            {email}
          </p>
        </div>

        <form
          onSubmit={handleVerify}
          className="mt-8"
        >
         <div className="flex justify-center gap-3">
  {otp.map(
    (digit, index) => (
      <input
        key={index}
        id={`otp-${index}`}
        type="text"
        maxLength={1}
        value={digit}
        onChange={(e) =>
          handleOtpChange(
            e.target.value,
            index
          )
        }
        onKeyDown={(e) =>
          handleKeyDown(
            e,
            index
          )
        }
        className="
          h-14
          w-14

          rounded-2xl

          bg-slate-50
          dark:bg-[#182235]

          border
          border-slate-200
          dark:border-white/10

          text-center

          text-xl
          font-bold

          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/20
          focus:outline-none
        "
      />
    )
  )}
</div>

          {error && (
            <div
              className="
                mt-4
                p-3

                rounded-2xl

                text-red-500

                bg-red-500/10

                border
                border-red-500/20
              "
            >
              {error}
            </div>
          )}

          {success && (
            <div
              className="
                mt-4
                p-3

                rounded-2xl

                text-green-500

                bg-green-500/10

                border
                border-green-500/20
              "
            >
              {success}
            </div>
          )}

                    <button
            type="submit"
            disabled={loading}
            className="
              w-full

              mt-6

              h-14

              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              to-cyan-500

              text-white
              font-semibold

              hover:scale-[1.02]

              transition-all

              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>

          <button
  type="button"
  onClick={handleResendOtp}
  disabled={timer > 0}
  className="
    w-full

    mt-4

    py-3

    rounded-2xl

    bg-slate-100
    dark:bg-white/5

    text-blue-600
    dark:text-blue-400

    font-medium

    hover:bg-slate-200
    dark:hover:bg-white/10

    transition-all

    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  {timer > 0
    ? `Resend OTP in ${timer}s`
    : "Resend OTP"}
</button>
        </form>

        <div
          className="
            mt-8

            text-center
          "
        >
          <h2
            className="
              text-xl
              font-bold
            "
          >
            na
            <span className="text-blue-600">
              𝕏
            </span>
            ity
          </h2>

          <p
            className="
              mt-1

              text-xs

              text-slate-500
              dark:text-slate-400
            "
          >
            AI Powered Smart City Platform
          </p>
        </div>
      </div>
    </main>
  );
}