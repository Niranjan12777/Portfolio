import api from "./axios.js";

export const login = (credentials) =>
  api.post("/admin/login", credentials);

export const getProfile = () =>
  api.get("/admin/profile");