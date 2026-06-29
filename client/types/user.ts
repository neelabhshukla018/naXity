// types/user.ts

export type Gender =
  | "MALE"
  | "FEMALE"
  | "OTHER"
  | "PREFER_NOT_TO_SAY";

export type UserRole =
  | "USER"
  | "DRIVER"
  | "ADMIN"
  | "CITY_OFFICIAL"
  | "RESTAURANT_OWNER";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  imageUrl?: string;
  bio?: string;
  city?: string;
  state?: string;
  address?: string;
  gender?: Gender;
  dateOfBirth?: string;
  role: UserRole;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}