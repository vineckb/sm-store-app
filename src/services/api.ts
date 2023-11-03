import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const publicApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

console.log(process.env.EXPO_PUBLIC_API_URL);
