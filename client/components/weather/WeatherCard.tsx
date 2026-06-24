"use client";

import { useWeather } from "@/hooks/useWeather";
import WeatherAnimation from "@/components/weather/WeatherAnimation";

export default function WeatherCard() {
  const weather = useWeather();

  if (!weather) {
    return (
      <div
        className="
          relative
          overflow-hidden
          h-32
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          animate-pulse
        "
      >
        <div className="absolute inset-0 p-4">
          <div className="h-6 w-16 rounded bg-slate-200 mb-2" />
          <div className="h-3 w-24 rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  let weatherTheme = {
    bg: "",
    text: "",
    subText: "",
  };

  switch (weather.condition) {
    case "Clear":
      weatherTheme = {
        bg: "from-amber-300 via-yellow-200 to-orange-200",
        text: "text-amber-950",
        subText: "text-amber-800",
      };
      break;

    case "Clouds":
      weatherTheme = {
        bg: "from-slate-400 via-slate-200 to-slate-100",
        text: "text-slate-900",
        subText: "text-slate-700",
      };
      break;

    case "Rain":
    case "Drizzle":
      weatherTheme = {
        bg: "from-blue-600 via-sky-500 to-cyan-400",
        text: "text-white",
        subText: "text-white/80",
      };
      break;

    case "Thunderstorm":
      weatherTheme = {
        bg: "from-slate-900 via-indigo-900 to-purple-900",
        text: "text-white",
        subText: "text-white/70",
      };
      break;

    case "Snow":
      weatherTheme = {
        bg: "from-cyan-300 via-sky-100 to-white",
        text: "text-slate-900",
        subText: "text-slate-700",
      };
      break;

    default:
      weatherTheme = {
        bg: "from-slate-900 via-blue-950 to-slate-950",
        text: "text-white",
        subText: "text-white/70",
      };
  }

  return (
    <div
      className={`
        relative
        overflow-hidden

        h-32

        rounded-3xl

        border
        border-white/20

        bg-gradient-to-br
        ${weatherTheme.bg}

        shadow-lg

        hover:scale-[1.02]
        hover:shadow-xl

        transition-all
        duration-300
      `}
    >
      {/* Weather Animation */}
      <div className="absolute inset-0 z-0">
        <WeatherAnimation
          condition={weather.condition}
        />
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 z-10" />

      {/* Content */}
      <div
        className="
          relative
          z-20

          h-full

          flex
          flex-col
          items-center
          justify-center

          text-center
        "
      >
        <h2
          className={`
            text-4xl
            font-bold
            leading-none

            ${weatherTheme.text}
          `}
        >
          {weather.temperature}°
        </h2>

        <p
          className={`
            mt-1
            text-sm
            font-semibold
            truncate
            max-w-[90%]

            ${weatherTheme.subText}
          `}
        >
          {weather.city}
        </p>

        <p
          className={`
            mt-1
            text-xs
            font-medium

            ${weatherTheme.subText}
          `}
        >
          {weather.condition}
        </p>
      </div>
    </div>
  );
}