// utils/calculateETA.ts

export function calculateETA(
  distanceKm: number,
  averageSpeedKmh = 40
): string {
  if (averageSpeedKmh <= 0) return "Unknown";

  const hours = distanceKm / averageSpeedKmh;

  const minutes = Math.round(hours * 60);

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const h = Math.floor(minutes / 60);

  const m = minutes % 60;

  return `${h}h ${m}m`;
}