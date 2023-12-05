import axios from "axios";

export const http = axios.create({
  baseURL: "https://newsapi.org/v2/",
});
