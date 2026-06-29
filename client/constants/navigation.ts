// constants/navigation.ts

import {
  Home,
  Compass,
  Car,
  UtensilsCrossed,
  ParkingCircle,
  Bus,
  ShieldAlert,
  User,
  Settings,
} from "lucide-react";

export const SIDEBAR_NAVIGATION = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },

  {
    title: "Explore",
    href: "/explore",
    icon: Compass,
  },

  {
    title: "Rides",
    href: "/rides",
    icon: Car,
  },

  {
    title: "Discover",
    href: "/discover",
    icon: UtensilsCrossed,
  },

  {
    title: "Parking",
    href: "/parking",
    icon: ParkingCircle,
  },

  {
    title: "Transport",
    href: "/transport",
    icon: Bus,
  },

  {
    title: "Emergency",
    href: "/emergency",
    icon: ShieldAlert,
  },

  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },

  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
] as const;