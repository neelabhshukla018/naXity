const axios = require("axios");

const getCurrentWeather = async (lat, lon) => {
  try {
    // Fetch weather and location data in parallel
    const [weatherResponse, geoResponse] = await Promise.all([
      axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat,
            lon,
            appid: process.env.OPENWEATHER_API_KEY,
            units: "metric",
          },
        }
      ),

      axios.get(
        "https://nominatim.openstreetmap.org/reverse",
        {
          params: {
            format: "jsonv2",
            lat,
            lon,
            zoom: 18,
            addressdetails: 1,
          },
          headers: {
            "User-Agent": "naXity/1.0 (https://naxity.com)",
          },
        }
      ),
    ]);

    const weather = weatherResponse.data;
    const address =
      geoResponse.data?.address || {};

    // Get the most specific locality available
    const locality =
      address.village ||
      address.hamlet ||
      address.suburb ||
      address.neighbourhood ||
      address.quarter ||
      address.city_district ||
      address.town ||
      address.city ||
      weather.name;

    // District / City
    const city =
      address.city ||
      address.town ||
      address.county ||
      weather.name;

    // State
    const state = address.state || "";

    return {
      location: {
        locality,
        city,
        state,
        country:
          address.country ||
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

        windSpeed:
          weather.wind.speed,

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