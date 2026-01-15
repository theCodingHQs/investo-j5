"use client";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:4002/";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "MapApp/1.0",
  },
});

/* =======================
   Request Interceptor
   ======================= */
apiClient.interceptors.request.use(
  (config) => {
    // Example: attach auth token later if needed
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/* =======================
   Response Interceptor
   ======================= */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Server responded with error status
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error("Network Error:", error.message);
    } else {
      // Something else
      console.error("Axios Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export { apiClient };
