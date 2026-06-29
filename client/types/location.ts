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
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  coordinates: Coordinates;
}