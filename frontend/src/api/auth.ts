import { API_ENDPOINTS } from '../config/api';

export const signup = async (
  email: string,
  password: string,
  confirmPassword: string
) => {
  const res = await fetch(API_ENDPOINTS.auth.signup, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, confirmPassword }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Signup failed");
  }

  return res.json();
};

export const login = async (email: string, password: string) => {
  const res = await fetch(API_ENDPOINTS.auth.login, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Login failed");
  }

  return res.json();
};

export const getProfile = async (token: string) => {
  const res = await fetch(API_ENDPOINTS.auth.profile, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Profile fetch failed");
  }

  return res.json();
};
