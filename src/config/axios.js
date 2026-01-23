import axios from "axios";
const api = axios.create({
  baseURL: "https://69731167b5f46f8b5826076e.mockapi.io/user",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
