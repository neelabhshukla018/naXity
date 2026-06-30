import { create } from "zustand";

interface LocationState {
  // =========================
  // Coordinates
  // =========================

  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;

  // =========================
  // Address
  // =========================

  name: string;
  locality: string;
  city: string;
  district: string;
  state: string;
  country: string;
  postalCode: string;

  // =========================
  // Status
  // =========================

  loading: boolean;
  error: string | null;

  // =========================
  // Actions
  // =========================

  setCoordinates: (
    latitude: number,
    longitude: number,
    accuracy?: number
  ) => void;

  setAddress: (
    name: string,
    locality: string,
    city: string,
    district: string,
    state: string,
    country: string,
    postalCode: string
  ) => void;

  setLoading: (
    loading: boolean
  ) => void;

  setError: (
    error: string | null
  ) => void;

  resetLocation: () => void;
}

export const useLocationStore =
  create<LocationState>((set) => ({
    // =========================
    // Initial State
    // =========================

    latitude: null,
    longitude: null,
    accuracy: null,

    name: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    country: "",
    postalCode: "",

    loading: true,
    error: null,

    // =========================
    // Actions
    // =========================

    setCoordinates: (
      latitude,
      longitude,
      accuracy = 0
    ) =>
      set({
        latitude,
        longitude,
        accuracy,
      }),

    setAddress: (
      name,
      locality,
      city,
      district,
      state,
      country,
      postalCode
    ) =>
      set({
        name,
        locality,
        city,
        district,
        state,
        country,
        postalCode,
      }),

    setLoading: (loading) =>
      set({
        loading,
      }),

    setError: (error) =>
      set({
        error,
      }),

    resetLocation: () =>
      set({
        latitude: null,
        longitude: null,
        accuracy: null,

        name: "",
        locality: "",
        city: "",
        district: "",
        state: "",
        country: "",
        postalCode: "",

        loading: false,
        error: null,
      }),
  }));