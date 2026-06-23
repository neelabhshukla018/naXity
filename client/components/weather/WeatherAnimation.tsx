"use client";

import SunnyAnimation from "@/components/weather/animations/SunnyAnimation";
import RainAnimation from "@/components/weather/animations/RainAnimation";
import CloudAnimation from "@/components/weather/animations/CloudAnimation";
import StormAnimation from "@/components/weather/animations/StormAnimation";
import SnowAnimation from "@/components/weather/animations/SnowAnimation";
import NightAnimation from "@/components/weather/animations/NightAnimation";

interface WeatherAnimationProps {
  condition: string;
}

export default function WeatherAnimation({
  condition,
}: WeatherAnimationProps) {
  switch (condition) {
    case "Clear":
      return <SunnyAnimation />;

    case "Clouds":
      return <CloudAnimation />;

    case "Rain":
    case "Drizzle":
      return <RainAnimation />;

    case "Thunderstorm":
      return <StormAnimation />;

    case "Snow":
      return <SnowAnimation />;

    default:
      return <NightAnimation />;
  }
}