import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: JSON.stringify(apiKey),
  },
});

export default apiClient;
