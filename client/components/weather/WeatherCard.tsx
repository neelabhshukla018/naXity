"use client";

import { MapPin, Droplets, Wind } from "lucide-react";

import { useWeather } from "@/hooks/useWeather";
import WeatherAnimation from "./WeatherAnimation";

export default function WeatherCard() {
  const weather = useWeather();

  if (!weather) {
    return (
      <div className="h-44 rounded-3xl bg-slate-800/40 animate-pulse" />
    );
  }

  const { location, weather: current } = weather;

  const isNight = current.icon.endsWith("n");

  const shortState =
    location.state === "Uttar Pradesh"
      ? "UP"
      : location.state;

  let bg = "";
  let text = "";
  let sub = "";

  if (isNight) {
    bg =
      "from-slate-950 via-slate-900 to-indigo-950";
    text = "text-white";
    sub = "text-slate-300";
  } else {
    switch (current.condition) {
      case "Clear":
        bg =
          "from-amber-400 via-yellow-300 to-orange-300";
        text = "text-slate-900";
        sub = "text-slate-700";
        break;

      case "Clouds":
        bg =
          "from-slate-500 via-slate-300 to-slate-100";
        text = "text-slate-900";
        sub = "text-slate-700";
        break;

      case "Rain":
      case "Drizzle":
        bg =
          "from-blue-700 via-sky-600 to-cyan-500";
        text = "text-white";
        sub = "text-white/80";
        break;

      case "Thunderstorm":
        bg =
          "from-slate-900 via-indigo-900 to-purple-900";
        text = "text-white";
        sub = "text-white/80";
        break;

      case "Snow":
        bg =
          "from-cyan-300 via-sky-100 to-white";
        text = "text-slate-900";
        sub = "text-slate-700";
        break;

      default:
        bg =
          "from-slate-900 via-blue-950 to-slate-950";
        text = "text-white";
        sub = "text-white/80";
    }
  }

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        h-44
        p-4
        bg-gradient-to-br
        ${bg}
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
      `}
    >
      {/* Glow */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/15 blur-3xl" />

      {/* Animation */}
      <div className="absolute inset-0">
        <WeatherAnimation
          condition={current.condition}
          icon={current.icon}
        />
      </div>

      {/* Glass */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between text-center">

        {/* Location */}
        <div className="space-y-1">
          <div
            className={`flex items-center justify-center gap-1 ${sub}`}
          >
            <MapPin size={14} />

            <span className="truncate text-sm font-semibold">
              {location.locality || location.city}
            </span>
          </div>

          <p className={`text-xs ${sub}`}>
            {location.city}, {shortState}
          </p>
        </div>

        {/* Temperature */}
        <div className="space-y-1">
          <h1
            className={`text-[42px] font-black leading-none tracking-tight ${text}`}
          >
            {current.temperature}°
          </h1>

          <p
            className={`text-xs font-medium capitalize ${sub}`}
          >
            {current.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-3">

          <div
            className="
              flex items-center gap-1
              rounded-full
              bg-white/10
              px-3
              py-1
              backdrop-blur-md
            "
          >
            <Droplets
              size={13}
              className={sub}
            />

            <span
              className={`text-xs font-medium ${sub}`}
            >
              {current.humidity}%
            </span>
          </div>

          <div
            className="
              flex items-center gap-1
              rounded-full
              bg-white/10
              px-3
              py-1
              backdrop-blur-md
            "
          >
            <Wind
              size={13}
              className={sub}
            />

            <span
              className={`text-xs font-medium ${sub}`}
            >
              {Math.round(current.windSpeed)} km/h
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}