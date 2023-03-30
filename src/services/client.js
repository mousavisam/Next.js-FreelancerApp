import axios from "axios";
import { isEmpty } from "lodash";

import { getStorageToken } from "../utils/storage";

const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

HttpClient.interceptors.request.use(
  (config) => {
    const token = getStorageToken();

    if (!isEmpty(token)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default HttpClient;
