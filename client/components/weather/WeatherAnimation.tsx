"use client";

import SunnyAnimation from "./animations/SunnyAnimation";
import CloudAnimation from "./animations/CloudAnimation";
import RainAnimation from "./animations/RainAnimation";
import StormAnimation from "./animations/StormAnimation";
import SnowAnimation from "./animations/SnowAnimation";
import NightAnimation from "./animations/NightAnimation";

interface Props {
  condition: string;
  icon: string;
}

export default function WeatherAnimation({
  condition,
  icon,
}: Props) {
  const isNight = icon.endsWith("n");

  switch (icon) {
    // Clear Sky
    case "01d":
      return <SunnyAnimation />;

    case "01n":
      return <NightAnimation />;

    // Few / Scattered / Broken Clouds
    case "02d":
    case "03d":
    case "04d":
      return <CloudAnimation />;

    case "02n":
    case "03n":
    case "04n":
      return <NightAnimation />;

    // Rain / Drizzle
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return <RainAnimation />;

    // Thunderstorm
    case "11d":
    case "11n":
      return <StormAnimation />;

    // Snow
    case "13d":
    case "13n":
      return <SnowAnimation />;

    // Mist / Fog / Haze
    case "50d":
    case "50n":
      return isNight ? (
        <NightAnimation />
      ) : (
        <CloudAnimation />
      );

    default:
      // Fallback
      switch (condition) {
        case "Clear":
          return isNight ? (
            <NightAnimation />
          ) : (
            <SunnyAnimation />
          );

        case "Clouds":
          return isNight ? (
            <NightAnimation />
          ) : (
            <CloudAnimation />
          );

        case "Rain":
        case "Drizzle":
          return <RainAnimation />;

        case "Thunderstorm":
          return <StormAnimation />;

        case "Snow":
          return <SnowAnimation />;

        default:
          return isNight ? (
            <NightAnimation />
          ) : (
            <CloudAnimation />
          );
      }
  }
}