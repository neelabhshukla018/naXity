const {
  getCurrentWeather,
} = require("../services/weather.service");

const getWeather = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({
        success: false,
        message:
          "Latitude and longitude are required.",
      });
    }

    const weather =
      await getCurrentWeather(lat, lon);

    return res.status(200).json({
      success: true,
      message:
        "Weather fetched successfully.",
      data: weather,
    });
  } catch (error) {
    console.error(
      "Weather Controller Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch weather.",
    });
  }
};

module.exports = {
  getWeather,
};