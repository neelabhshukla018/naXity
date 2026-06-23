import { WeatherData } from "@/types/weather";

const API_URL =
  "http://localhost:5000/api/weather";

export const getWeather = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const response = await fetch(
    `${API_URL}?lat=${lat}&lon=${lon}`
  );

  const result = await response.json();

  return result.data;
};