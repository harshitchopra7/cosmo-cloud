import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
