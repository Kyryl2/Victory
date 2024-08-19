import axios from "axios";

export const backend = axios.create({
  baseURL: "https://victorybackend.onrender.com/",
});

export const updateAuthHeader = (token) => {
  backend.defaults.headers.common["Authorization"] = token;
};

export const clearAuthHeader = () => {
  backend.defaults.headers.common["Authorization"] = "";
};
