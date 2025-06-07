import axios, { AxiosError, AxiosRequestConfig } from "axios";

// Initialize tokens from localStorage if available
let accessToken: string | null =
  typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;
let refreshToken: string | null =
  typeof localStorage !== "undefined" ? localStorage.getItem("refreshToken") : null;

export const setAccessToken = (token: string) => {
  accessToken = token;
  localStorage.setItem("token", token);
};

export const setRefreshToken = (token: string) => {
  refreshToken = token;
  localStorage.setItem("refreshToken", token);
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Separate instance for refreshing tokens (no interceptors)
const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
  config => {
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const res = await authApi.post<{ access: string }>("api/v1/users/auth/token/refresh/", {
          refresh: refreshToken,
        });

        const newAccessToken = res.data.access;
        setAccessToken(newAccessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };

        return api(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
