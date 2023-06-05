import axios from "axios";

export const api = axios.create({
  baseURL: "https://desafiofullstack7.onrender.com",
  timeout: 10000,
});
