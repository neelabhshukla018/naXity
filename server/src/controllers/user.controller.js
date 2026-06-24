const prisma = require("../config/prisma");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

// =======================
// Upload Avatar
// =======================
const uploadAvatar = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Delete old avatar
    if (user.imagePublicId) {
      await cloudinary.uploader.destroy(user.imagePublicId);
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "naXity/avatars",
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }

        const updatedUser = await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            imageUrl: result.secure_url,
            imagePublicId: result.public_id,
          },
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            imageUrl: true,
            imagePublicId: true,
            city: true,
            state: true,
            role: true,
            isVerified: true,
          },
        });

        return res.status(200).json({
          success: true,
          message: "Avatar uploaded successfully",
          user: updatedUser,
        });
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  } catch (error) {
    console.error("UPLOAD AVATAR ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================
// Get Logged In User
// =======================
const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,

        imageUrl: true,

        bio: true,
        address: true,
        city: true,
        state: true,
        gender: true,
        dateOfBirth: true,

        role: true,
        isVerified: true,

        createdAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("GET ME ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =======================
// Update Profile
// =======================
const updateProfile = async (req, res) => {
  try {
    const {
      name,
      phone,
      bio,
      address,
      city,
      state,
      gender,
      dateOfBirth,
    } = req.body || {};

    const data = {};

    if (name !== undefined) data.name = name;
    if (phone !== undefined) data.phone = phone;
    if (bio !== undefined) data.bio = bio;
    if (address !== undefined) data.address = address;
    if (city !== undefined) data.city = city;
    if (state !== undefined) data.state = state;

    // Gender Enum Handling
    if (gender !== undefined) {
      const genderMap = {
        Male: "MALE",
        Female: "FEMALE",
        Other: "OTHER",
        "Prefer not to say": "PREFER_NOT_TO_SAY",

        MALE: "MALE",
        FEMALE: "FEMALE",
        OTHER: "OTHER",
        PREFER_NOT_TO_SAY: "PREFER_NOT_TO_SAY",
      };

      data.gender = genderMap[gender];
    }

    if (dateOfBirth) {
      data.dateOfBirth = new Date(dateOfBirth);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,

        imageUrl: true,

        bio: true,
        address: true,
        city: true,
        state: true,
        gender: true,
        dateOfBirth: true,

        role: true,
        isVerified: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("UPDATE PROFILE ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  uploadAvatar,
  getMe,
  updateProfile,
};