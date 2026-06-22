"use client";

import { useEffect } from "react";
import { getWeather } from "@/services/weather.service";
import { useWeatherStore } from "@/store/weatherStore";

export const useWeather = () => {
  const { weather, setWeather } = useWeatherStore();

  useEffect(() => {
    const loadWeather = async () => {
      const data = await getWeather();
      setWeather(data);
    };

    loadWeather();
  }, [setWeather]);

  return weather;
};