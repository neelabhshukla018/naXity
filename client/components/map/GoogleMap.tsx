"use client";

import { useEffect, useState } from "react";

import {
  GoogleMap,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const DEFAULT_LOCATION = {
  lat: 20.5937,
  lng: 78.9629,
};

export default function GoogleMapView() {
  const [location, setLocation] =
    useState(DEFAULT_LOCATION);

  const [map, setMap] =
    useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!navigator.geolocation) return;

    const watchId =
      navigator.geolocation.watchPosition(
        (position) => {
          const current = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setLocation(current);

          map.panTo(current);

          const targetZoom = 18;
          let zoom = map.getZoom() ?? 5;

          const animateZoom = () => {
            if (zoom >= targetZoom) return;

            zoom++;

            map.setZoom(zoom);

            setTimeout(
              animateZoom,
              80
            );
          };

          animateZoom();
        },

        (error) => {
          console.error(
            "Geolocation:",
            error
          );
        },

        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );

    return () => {
      navigator.geolocation.clearWatch(
        watchId
      );
    };
  }, [map]);

  return (
    <LoadScript
      googleMapsApiKey={
        process.env
          .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
      }
    >
      <GoogleMap
        mapContainerStyle={
          containerStyle
        }
        center={location}
        zoom={5}
        onLoad={(map) => setMap(map)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          clickableIcons: false,
          gestureHandling: "greedy",
        }}
      >
        <MarkerF position={location} />
      </GoogleMap>
    </LoadScript>
  );
}