"use client";

import { useEffect, useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState({
    lat: 25.4358,
    lon: 81.8463,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(
          "REAL LOCATION:",
          position.coords.latitude,
          position.coords.longitude
        );

        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.log("Location Error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return location;
};