import { message } from "antd";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor: tự động thêm token từ localStorage (client only)
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_NAME as string);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error instanceof Error ? error : new Error(error));
  }
);

// Interceptor: xử lý lỗi trả về
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : null;
    switch (status) {
      case 401:
        if (typeof window !== "undefined") {
          localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN_NAME as string);
          window.location.href = "/login";
        }
        break;
      case 403:
        message.error("Bạn không có quyền truy cập!");
        break;
      case 404:
        message.error("Không tìm thấy trang!");
        break;
      case 400:
        message.error("Yêu cầu không hợp lệ!");
        break;
      case 500:
        message.error("Đã xảy ra lỗi máy chủ!");
        break;
      default:
        message.error("Đã xảy ra lỗi không xác định!");
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
