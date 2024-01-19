import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes", // baseURL
  headers: {
    // API KEY
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  config.headers["x-api-key"] = "6b3c6af217d34416a7a75ad7f06771b7"; // Replace with your actual API key
  return config;
});

export default instance;
