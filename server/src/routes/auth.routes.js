const express = require("express");

const {
  register,
  login,
  logout,
  getMe,
  verifyOTP,
  resendOTP,
} = require("../controllers/auth.controller");

const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

// Verify Email OTP
router.post("/verify-otp", verifyOTP);

// Resend OTP
router.post("/resend-otp", resendOTP);

// Logout User
router.post("/logout", logout);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

// Get Current User
router.get("/me", protect, getMe);

module.exports = router;