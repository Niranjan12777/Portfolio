import api from "./axios.js";

export const getMessages = () =>
  api.get("/messages");