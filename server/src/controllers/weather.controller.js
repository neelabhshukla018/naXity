const {
  getCurrentWeather,
} = require("../services/weather.service");

const getWeather = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const weather = await getCurrentWeather(
      lat,
      lon
    );

    res.status(200).json({
      success: true,
      data: weather,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch weather",
    });
  }
};

module.exports = {
  getWeather,
};