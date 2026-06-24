
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();

  const { fetchUser } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
            rememberMe,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        if (
          data.message ===
          "Please verify your email first"
        ) {
          router.push(
            `/auth/verify-otp?email=${email}`
          );
          return;
        }

        setError(
          data.message ||
            "Login failed"
        );

        return;
      }

      await fetchUser();

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Email */}
      <div>
        <label
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-slate-700
            dark:text-slate-300
          "
        >
          Email Address
        </label>

        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          required
        />
      </div>

      {/* Password */}
      <div>
        <label
          className="
            mb-2
            block
            text-sm
            font-semibold
            text-slate-700
            dark:text-slate-300
          "
        >
          Password
        </label>

        <div className="relative">
          <Input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              hover:text-blue-500
              transition-colors
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Remember + Forgot */}
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <label
          className="
            flex
            items-center
            gap-2
            text-sm
            text-slate-600
            dark:text-slate-400
          "
        >
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) =>
              setRememberMe(
                e.target.checked
              )
            }
            className="
              h-4
              w-4
              accent-blue-600
            "
          />

          Remember Me
        </label>

        <button
          type="button"
          className="
            text-sm
            text-blue-500
            hover:text-blue-600
            transition-colors
          "
        >
          Forgot Password?
        </button>
      </div>

      {/* Error */}
      {error && (
        <div
          className="
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

      {/* Footer */}
      <div
        className="
          text-center
          text-xs
          text-slate-500
          dark:text-slate-400
        "
      >
        Secure JWT Authentication •
        na𝕏ity
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Signing In..."
          : "Continue"}
      </Button>
    </form>
  );
}

