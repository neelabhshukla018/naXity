"use client";

import dynamic from "next/dynamic";

const GoogleMap = dynamic(
  () => import("./GoogleMap"),
  {
    ssr: false,
  }
);

export default function Map() {
  return (
    <div className="w-full h-full">
      <GoogleMap />
    </div>
  );
}