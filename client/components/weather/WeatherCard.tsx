"use client";

import { useWeather } from "@/hooks/useWeather";

export default function WeatherCard() {
  const weather = useWeather();

  if (!weather) {
    return (
      <div className="text-center p-5">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
      rounded-3xl
      bg-white/20
      dark:bg-white/5
      backdrop-blur-xl
      border border-white/10
      shadow-lg
      p-5
      text-center
    "
    >
      <div className="text-5xl animate-pulse">
        {weather.icon}
      </div>

      <h2 className="text-4xl font-bold mt-3">
        {weather.temperature}°
      </h2>

      <p className="text-sm opacity-70 mt-1">
        {weather.city}
      </p>
    </div>
  );
}