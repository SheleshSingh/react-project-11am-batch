import axios from "axios";
const api = axios.create({
  baseURL: "https://68ede398df2025af78016bcc.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default api;
