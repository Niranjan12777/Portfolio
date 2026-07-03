import api from "./axios.js";

export const getAbout = () =>
  api.get("/about");

export const updateAbout = (aboutData) =>
  api.put("/about", aboutData);
