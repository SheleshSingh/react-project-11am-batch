import axios from "axios";
const api = axios.create({
  baseURL: "https://68ede399df2025af78016bd3.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
