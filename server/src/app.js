const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weather.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "naXity Backend Running 🚀",
  });
});

module.exports = app;