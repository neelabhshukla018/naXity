import { create } from "zustand";
import { WeatherData } from "@/types/weather";

interface WeatherStore {
  weather: WeatherData | null;
  setWeather: (weather: WeatherData) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  weather: null,

  setWeather: (weather) =>
    set({
      weather,
    }),
}));