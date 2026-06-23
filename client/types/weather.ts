export interface WeatherData {
  city: string;
  country: string;

  temperature: number;
  feelsLike: number;

  humidity: number;
  windSpeed: number;

  condition: string;
  description: string;

  icon: string;

  latitude: number;
  longitude: number;
}

export interface ForecastDay {
  date: string;

  temperature: number;

  condition: string;
  description: string;

  icon: string;
}