"use client";

import { useEffect } from "react";

import { getWeather } from "@/services/weather.service";
import { useWeatherStore } from "@/store/weatherStore";
import { useLocation } from "./useLocation";

export const useWeather = () => {
  const { weather, setWeather } = useWeatherStore();
  const { lat, lon } = useLocation();

  useEffect(() => {
    if (!lat || !lon) return;

    const loadWeather = async () => {
      try {
        const data = await getWeather(lat, lon);

        console.log("WEATHER DATA:", data);

        setWeather(data);
      } catch (error) {
        console.error("Weather Error:", error);
      }
    };

    loadWeather();
  }, [lat, lon, setWeather]);

  return weather;
};