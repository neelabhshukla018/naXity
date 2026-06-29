"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(
  () => import("./MapView"),
  {
    ssr: false,
  }
);

export default function Map() {
  return (
    <div className="w-full h-full">
      <MapView />
    </div>
  );
}