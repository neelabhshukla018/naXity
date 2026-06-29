// constants/api.ts

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    VERIFY_OTP: "/auth/verify-otp",
    RESEND_OTP: "/auth/resend-otp",
  },

  USER: {
    PROFILE: "/user/me",
    UPDATE_PROFILE: "/user/update-profile",
    UPLOAD_AVATAR: "/user/upload-avatar",
    DELETE_AVATAR: "/user/delete-avatar",
  },

  WEATHER: {
    CURRENT: "/weather/current",
    FORECAST: "/weather/forecast",
  },

  MAP: {
    DIRECTIONS: "/map/directions",
    SEARCH: "/map/search",
    NEARBY: "/map/nearby",
    TRAFFIC: "/map/traffic",
  },

  RIDES: {
    BOOK: "/rides/book",
    HISTORY: "/rides/history",
    ACTIVE: "/rides/active",
  },

  PARKING: {
    NEARBY: "/parking/nearby",
    RESERVE: "/parking/reserve",
  },
} as const;