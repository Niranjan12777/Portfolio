export const getImageUrl = (item, keys = []) => {
  const value = keys
    .map((key) => item?.[key])
    .find((candidate) => typeof candidate === "string" && candidate.trim());

  return value?.trim() || "";
};
