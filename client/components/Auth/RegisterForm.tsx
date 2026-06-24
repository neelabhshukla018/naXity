"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [state, setState] =
    useState("");

  const [city, setCity] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [agreeTerms, setAgreeTerms] =
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

      if (!agreeTerms) {
        setError(
          "Please accept Terms & Privacy Policy"
        );

        return;
      }

      if (!/^[0-9]{10}$/.test(phone)) {
        setError(
          "Please enter a valid 10 digit phone number"
        );

        return;
      }

            const res = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name,
            email,
            phone,
            password,
            city,
            state,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        setError(
          data.message ||
            "Registration failed"
        );

        return;
      }

      router.push(
        `/auth/verify-otp?email=${email}`
      );
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
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Full Name
        </label>

        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>

        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>

        <Input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          required
        />
      </div>
            <div>
        <label className="mb-2 block text-sm font-semibold">
          Password
        </label>

        <div className="relative">
          <Input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Create password"
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

      <div>
        <label className="mb-2 block text-sm font-semibold">
          State
        </label>

        <select
          value={state}
          onChange={(e) =>
            setState(e.target.value)
          }
          required
          className="
            w-full
            h-14
            px-4
            rounded-2xl
            bg-slate-50
            dark:bg-[#182235]
            text-slate-800
            dark:text-white
            border
            border-slate-200
            dark:border-white/10
            focus:ring-4
            focus:ring-blue-500/20
          "
        >
          <option value="">
            Select State
          </option>

          {states.map((state) => (
            <option
              key={state}
              value={state}
            >
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          City
        </label>

        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          required
        />
      </div>
            <div
        className="
          flex
          items-start
          gap-3
        "
      >
        <input
          type="checkbox"
          checked={agreeTerms}
          onChange={(e) =>
            setAgreeTerms(
              e.target.checked
            )
          }
          className="
            mt-1
            h-5
            w-5
            accent-blue-600
            cursor-pointer
          "
        />

        <p
          className="
            text-sm
            text-slate-600
            dark:text-slate-400
          "
        >
          I agree to the
          Terms of Service and
          Privacy Policy.
        </p>
      </div>

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

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </Button>
    </form>
  );
}