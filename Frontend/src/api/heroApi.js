import api from "./axios.js";

export const getHero = () =>
  api.get("/hero");

export const updateHero = (heroData) =>
  api.put("/hero", heroData);
