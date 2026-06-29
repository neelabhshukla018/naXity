"use client";

import Map, { NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView() {
  return (
    <div className="w-full h-full">
      <Map
        initialViewState={{
          longitude: 81.8463,
          latitude: 25.4358,
          zoom: 13,
        }}
        minZoom={3}
        maxZoom={19}
        maxPitch={60}
        mapStyle={{
          version: 8,
          sources: {
            osm: {
              type: "raster",
              tiles: [
                "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
              ],
              tileSize: 256,
              maxzoom: 19,
              attribution: "© OpenStreetMap contributors",
            },
          },
          layers: [
            {
              id: "osm",
              type: "raster",
              source: "osm",
            },
          ],
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
}