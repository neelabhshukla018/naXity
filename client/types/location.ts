// types/location.ts

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CurrentLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
}

export interface Address {
  // Full formatted address
  name?: string;

  // Locality / Village / Area
  locality?: string;

  // Street
  street?: string;

  // City / Town
  city?: string;

  // District
  district?: string;

  // State
  state?: string;

  // Country
  country?: string;

  // Postal Code
  postalCode?: string;

  coordinates: Coordinates;
}