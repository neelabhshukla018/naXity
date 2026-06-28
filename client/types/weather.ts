export interface WeatherData {
  location: {
    locality: string;
    city: string;
    state: string;
    country: string;
  };

  weather: {
    temperature: number;
    feelsLike: number;

    humidity: number;
    pressure: number;

    windSpeed: number;
    visibility: number;

    condition: string;
    description: string;

    icon: string;

    sunrise: number;
    sunset: number;
  };

  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface ForecastDay {
  date: string;

  temperature: number;

  condition: string;
  description: string;

  icon: string;
}