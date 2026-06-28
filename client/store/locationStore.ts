import { create } from "zustand";

interface LocationState {
  latitude: number | null;
  longitude: number | null;

  locality: string;
  city: string;
  state: string;
  country: string;

  loading: boolean;
  error: string | null;

  setCoordinates: (
    latitude: number,
    longitude: number
  ) => void;

  setAddress: (
    locality: string,
    city: string,
    state: string,
    country: string
  ) => void;

  setLoading: (loading: boolean) => void;

  setError: (error: string | null) => void;

  resetLocation: () => void;
}

export const useLocationStore =
  create<LocationState>((set) => ({
    latitude: null,
    longitude: null,

    locality: "",
    city: "",
    state: "",
    country: "",

    loading: true,
    error: null,

    setCoordinates: (
      latitude,
      longitude
    ) =>
      set({
        latitude,
        longitude,
      }),

    setAddress: (
      locality,
      city,
      state,
      country
    ) =>
      set({
        locality,
        city,
        state,
        country,
      }),

    setLoading: (loading) =>
      set({ loading }),

    setError: (error) =>
      set({ error }),

    resetLocation: () =>
      set({
        latitude: null,
        longitude: null,

        locality: "",
        city: "",
        state: "",
        country: "",

        loading: false,
        error: null,
      }),
  }));