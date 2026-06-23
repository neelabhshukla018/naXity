const axios = require("axios");

const getCurrentWeather = async (lat, lon) => {
  const weatherResponse = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        appid: process.env.OPENWEATHER_API_KEY,
        units: "metric",
      },
    }
  );

  const geoResponse = await axios.get(
    "https://api.openweathermap.org/geo/1.0/reverse",
    {
      params: {
        lat,
        lon,
        limit: 1,
        appid: process.env.OPENWEATHER_API_KEY,
      },
    }
  );

  const data = weatherResponse.data;
  const geo = geoResponse.data[0];

  return {
    city:
      geo?.state_district ||
      geo?.state ||
      geo?.name ||
      data.name,

    country: data.sys.country,

    temperature: Math.round(data.main.temp),

    feelsLike: Math.round(
      data.main.feels_like
    ),

    humidity: data.main.humidity,
    windSpeed: data.wind.speed,

    condition: data.weather[0].main,
    description:
      data.weather[0].description,

    icon: data.weather[0].icon,

    latitude: data.coord.lat,
    longitude: data.coord.lon,
  };
};

module.exports = {
  getCurrentWeather,
};