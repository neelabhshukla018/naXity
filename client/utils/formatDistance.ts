// utils/formatDistance.ts

export function formatDistance(distanceInMeters: number): string {
  if (distanceInMeters < 1000) {
    return `${distanceInMeters.toFixed(0)} m`;
  }

  return `${(distanceInMeters / 1000).toFixed(1)} km`;
}