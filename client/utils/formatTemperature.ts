// utils/formatTemperature.ts

export function formatTemperature(
  temperature: number,
  unit: "C" | "F" = "C"
) {
  if (unit === "F") {
    return `${((temperature * 9) / 5 + 32).toFixed(1)}°F`;
  }

  return `${temperature.toFixed(0)}°C`;
}