import { WeatherData } from "@/types/weather";

const API_URL =
  "http://localhost:5000/api/weather";

export const getWeather = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${API_URL}?lat=${lat}&lon=${lon}`
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch weather."
      );
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.message ||
          "Unable to fetch weather."
      );
    }

    return result.data;
  } catch (error) {
    console.error(
      "Weather Service Error:",
      error
    );

    throw error;
  }
};