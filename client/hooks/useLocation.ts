"use client";

import { useEffect, useState } from "react";

interface LocationState {
  lat: number | null;
  lon: number | null;
  loading: boolean;
  error: string | null;
}

export const useLocation = () => {
  const [location, setLocation] =
    useState<LocationState>({
      lat: null,
      lon: null,
      loading: true,
      error: null,
    });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        lat: null,
        lon: null,
        loading: false,
        error:
          "Geolocation is not supported by your browser.",
      });
      return;
    }

    const watchId =
      navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            loading: false,
            error: null,
          });
        },
        (error) => {
          let message =
            "Unable to fetch location.";

          switch (error.code) {
            case error.PERMISSION_DENIED:
              message =
                "Location permission denied.";
              break;

            case error.POSITION_UNAVAILABLE:
              message =
                "Location unavailable.";
              break;

            case error.TIMEOUT:
              message =
                "Location request timed out.";
              break;
          }

          setLocation({
            lat: null,
            lon: null,
            loading: false,
            error: message,
          });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );

    return () => {
      navigator.geolocation.clearWatch(
        watchId
      );
    };
  }, []);

  return location;
};