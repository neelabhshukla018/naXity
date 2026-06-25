const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { protect } = require("../middleware/auth.middleware");

const {
  uploadAvatar,
  getMe,
  updateProfile,
  deleteAvatar,
} = require("../controllers/user.controller");

// Upload Avatar
router.post(
  "/upload-avatar",
  protect,
  upload.single("avatar"),
  uploadAvatar
);

// Get Logged In User
router.get(
  "/me",
  protect,
  getMe
);

// Update Profile
router.put(
  "/update-profile",
  protect,
  updateProfile
);

// Delete Avatar
router.delete(
  "/delete-avatar",
  protect,
  deleteAvatar
);

module.exports = router;