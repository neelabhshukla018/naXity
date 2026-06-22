import { WeatherData } from "@/types/weather";

export const getWeather = async (): Promise<WeatherData> => {
  return {
    city: "Prayagraj",
    temperature: 31,
    condition: "Clear",
    icon: "☀️",
  };
};