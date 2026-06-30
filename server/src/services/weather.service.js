const axios = require("axios");

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const GEO_API =
  "https://api.openweathermap.org/geo/1.0/reverse";

const getCurrentWeather = async (lat, lon) => {
  try {
    const [weatherResponse, geoResponse] =
      await Promise.all([
        axios.get(WEATHER_API, {
          params: {
            lat,
            lon,
            units: "metric",
            appid:
              process.env.OPENWEATHER_API_KEY,
          },
        }),

        axios.get(GEO_API, {
          params: {
            lat,
            lon,
            limit: 1,
            appid:
              process.env.OPENWEATHER_API_KEY,
          },
        }),
      ]);

    const weather = weatherResponse.data;
    const geo = geoResponse.data[0] || {};

    return {
      location: {
        locality:
          geo.local_names?.en ||
          geo.name ||
          weather.name,

        city:
          geo.name ||
          weather.name,

        state:
          geo.state || "",

        country:
          geo.country ||
          weather.sys.country,
      },

      weather: {
        temperature: Math.round(
          weather.main.temp
        ),

        feelsLike: Math.round(
          weather.main.feels_like
        ),

        humidity:
          weather.main.humidity,

        pressure:
          weather.main.pressure,

        windSpeed: Math.round(
          weather.wind.speed * 3.6
        ),

        visibility:
          weather.visibility / 1000,

        condition:
          weather.weather[0].main,

        description:
          weather.weather[0].description,

        icon:
          weather.weather[0].icon,

        sunrise:
          weather.sys.sunrise,

        sunset:
          weather.sys.sunset,
      },

      coordinates: {
        latitude:
          weather.coord.lat,

        longitude:
          weather.coord.lon,
      },
    };
  } catch (error) {
    console.error(
      "Weather Service Error:",
      error.response?.data ||
        error.message
    );

    throw new Error(
      "Unable to fetch weather information."
    );
  }
};

module.exports = {
  getCurrentWeather,
};