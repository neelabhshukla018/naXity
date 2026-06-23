import { WeatherData } from "@/types/weather";

export const getWeather = async (): Promise<WeatherData> => {
  return {
    city: "Prayagraj",
    country: "India",

    temperature: 31,
    feelsLike: 34,

    humidity: 68,
    windSpeed: 12,

    condition: "Clear",
    description: "Sunny Sky",

    icon: "☀️",

    latitude: 25.4358,
    longitude: 81.8463,
  };
};