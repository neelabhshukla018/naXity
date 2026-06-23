"use client";

import { useWeather } from "@/hooks/useWeather";
import WeatherAnimation from "@/components/weather/WeatherAnimation";

export default function WeatherCard() {
  const weather = useWeather();

  if (!weather) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/20
          dark:bg-white/5
          backdrop-blur-xl
          p-4
          shadow-lg
          animate-pulse
        "
      >
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-gray-300/40 dark:bg-white/10" />

          <div className="h-5 w-16 rounded bg-gray-300/40 dark:bg-white/10" />
        </div>

        <div className="mt-3 h-4 w-32 rounded bg-gray-300/40 dark:bg-white/10" />
      </div>
    );
  }

  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/20
        dark:bg-white/5
        backdrop-blur-xl
        p-4
        shadow-lg
        transition-all
        duration-300
        hover:border-white/20
      "
    >
      <div className="flex items-center gap-3">
        <WeatherAnimation
          condition={weather.condition}
        />

        <span className="text-lg font-semibold">
          {weather.temperature}°C
        </span>
      </div>

      <p className="mt-2 text-sm opacity-70">
        {weather.city}, {weather.country}
      </p>
    </div>
  );
}