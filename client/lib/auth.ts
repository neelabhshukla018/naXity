// lib/auth.ts

export const AUTH_KEYS = {
  TOKEN: "token",
  USER: "user",
} as const;

export const saveUser = (user: unknown) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    AUTH_KEYS.USER,
    JSON.stringify(user)
  );
};

export const getUser = () => {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem(
    AUTH_KEYS.USER
  );

  return user ? JSON.parse(user) : null;
};

export const clearUser = () => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(AUTH_KEYS.USER);
};