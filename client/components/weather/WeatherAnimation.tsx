"use client";

import SunnyAnimation from "./animations/SunnyAnimation";
import CloudAnimation from "./animations/CloudAnimation";
import RainAnimation from "./animations/RainAnimation";
import StormAnimation from "./animations/StormAnimation";
import SnowAnimation from "./animations/SnowAnimation";
import NightAnimation from "./animations/NightAnimation";

interface Props {
  condition: string;
}

export default function WeatherAnimation({
  condition,
}: Props) {
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