const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const weatherRoutes = require("./routes/weather.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/weather", weatherRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "naXity Backend Running 🚀",
  });
});

module.exports = app;