
const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");

const { generateToken } = require("../utils/generateToken");
const generateOTP = require("../utils/generateOTP");
const sendOTPEmail = require("../services/mail.service");

// Register User
const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      city,
      state,
    } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    if (phone) {
      const existingPhone =
        await prisma.user.findUnique({
          where: { phone },
        });

      if (existingPhone) {
        return res.status(400).json({
          success: false,
          message: "Phone number already exists",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const otp = generateOTP();

    await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        city,
        state,
        otp,
        otpExpiry: new Date(
          Date.now() + 10 * 60 * 1000
        ),
        isVerified: false,
      },
    });

    await sendOTPEmail(email, otp);

    return res.status(201).json({
      success: true,
      message:
        "OTP sent successfully. Please verify your email.",
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Verify OTP
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (
      !user.otpExpiry ||
      new Date() > user.otpExpiry
    ) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    const updatedUser =
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          isVerified: true,
          otp: null,
          otpExpiry: null,
        },
      });

    const token =
      generateToken(updatedUser);

    res.cookie("token", token, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      sameSite: "strict",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message:
        "Email verified successfully",
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
      },
    });
  } catch (error) {
    console.error(
      "Verify OTP Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Resend OTP
const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = generateOTP();

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        otp,
        otpExpiry: new Date(
          Date.now() + 10 * 60 * 1000
        ),
      },
    });

    await sendOTPEmail(email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP resent successfully",
    });
  } catch (error) {
    console.error("Resend OTP Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message:
          "Please verify your email first",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        state: user.state,
        imageUrl: user.imageUrl,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Logout User
const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message:
        "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Current Logged In User
const getMe = async (req, res) => {
  try {
    const user =
      await prisma.user.findUnique({
        where: {
          id: req.user.id,
        },
      });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        state: user.state,
        imageUrl: user.imageUrl,
        role: user.role,
        isVerified:
          user.isVerified,
      },
    });
  } catch (error) {
    console.error("GetMe Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  register,
  verifyOTP,
  resendOTP,
  login,
  logout,
  getMe,
};

