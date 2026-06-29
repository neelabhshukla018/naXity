// constants/weather.ts

export const WEATHER_ICONS = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Fog: "🌫️",
  Haze: "🌫️",
  Smoke: "🌫️",
  Dust: "🌪️",
  Sand: "🏜️",
  Ash: "🌋",
  Squall: "💨",
  Tornado: "🌪️",
} as const;

export const WEATHER_GRADIENTS = {
  Clear: "from-yellow-400 to-orange-500",

  Clouds: "from-slate-400 to-slate-600",

  Rain: "from-sky-500 to-blue-700",

  Thunderstorm: "from-slate-700 to-slate-900",

  Snow: "from-cyan-100 to-slate-300",

  Mist: "from-gray-300 to-gray-500",

  Default: "from-blue-500 to-indigo-700",
} as const;

export const AQI_LEVELS = {
  GOOD: {
    label: "Good",
    color: "text-green-500",
  },

  MODERATE: {
    label: "Moderate",
    color: "text-yellow-500",
  },

  UNHEALTHY: {
    label: "Unhealthy",
    color: "text-red-500",
  },
} as const;