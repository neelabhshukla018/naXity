"use client";

import { useEffect } from "react";

import { useLocationStore } from "@/store/locationStore";
import { reverseGeocode } from "@/services/geocoding.service";

export default function useCurrentLocation() {
  const {
    latitude,
    longitude,
    loading,
    error,

    setCoordinates,
    setAddress,
    setLoading,
    setError,
  } = useLocationStore();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by this browser."
      );
      setLoading(false);
      return;
    }

    const watchId =
      navigator.geolocation.watchPosition(
        async (position) => {
          const {
            latitude,
            longitude,
            accuracy,
          } = position.coords;

          console.table({
            latitude,
            longitude,
            accuracy,
            altitude:
              position.coords.altitude,
            heading:
              position.coords.heading,
            speed:
              position.coords.speed,
          });

          // Save Coordinates
          setCoordinates(
            latitude,
            longitude,
            accuracy
          );

          // Reverse Geocode
          const address =
            await reverseGeocode(
              latitude,
              longitude
            );

          console.log(
            "Reverse Geocode:",
            address
          );

          if (address) {
            setAddress(
              address.name ?? "",
              address.locality ?? "",
              address.city ?? "",
              address.district ?? "",
              address.state ?? "",
              address.country ?? "",
              address.postalCode ?? ""
            );
          }

          setError(null);
          setLoading(false);
        },

        (err) => {
          console.error(
            "Geolocation Error:",
            err
          );

          setError(err.message);
          setLoading(false);
        },

        {
          enableHighAccuracy: true,
          timeout: 30000,
          maximumAge: 0,
        }
      );

    return () => {
      navigator.geolocation.clearWatch(
        watchId
      );
    };
  }, [
    setCoordinates,
    setAddress,
    setLoading,
    setError,
  ]);

  return {
    location:
      latitude !== null &&
      longitude !== null
        ? {
            latitude,
            longitude,
          }
        : null,

    loading,
    error,
  };
}