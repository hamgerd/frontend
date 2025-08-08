import type { AxiosError, AxiosRequestConfig } from "axios";

import axios from "axios";
import Cookies from "js-cookie";

let accessToken = Cookies.get("token") || null;

export const setAccessToken = (token: string) => {
  accessToken = token;
  Cookies.set("token", token, { secure: true, sameSite: "strict" });
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  config => {
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");

      if (!refreshToken) {
        return Promise.reject(error);
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
    }

    return Promise.reject(error);
  }
);

export default api;
