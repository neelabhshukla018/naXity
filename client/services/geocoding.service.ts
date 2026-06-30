export interface GoogleAddress {
  name: string;
  locality: string;
  city: string;
  district: string;
  state: string;
  country: string;
  postalCode: string;
}

export async function reverseGeocode(
  latitude: number,
  longitude: number
): Promise<GoogleAddress | null> {
  return new Promise((resolve) => {
    if (
      typeof window === "undefined" ||
      !window.google
    ) {
      resolve(null);
      return;
    }

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode(
      {
        location: {
          lat: latitude,
          lng: longitude,
        },
      },
      (results, status) => {
        if (
          status !== "OK" ||
          !results ||
          !results.length
        ) {
          resolve(null);
          return;
        }

        const components =
          results[0].address_components;

        const find = (
          type: string
        ) =>
          components.find((c) =>
            c.types.includes(type)
          )?.long_name || "";

        resolve({
          name:
            results[0].formatted_address,

          locality:
            find("sublocality") ||
            find("locality") ||
            find("neighborhood"),

          city:
            find("locality") ||
            find(
              "administrative_area_level_2"
            ),

          district: find(
            "administrative_area_level_2"
          ),

          state: find(
            "administrative_area_level_1"
          ),

          country: find("country"),

          postalCode: find(
            "postal_code"
          ),
        });
      }
    );
  });
}