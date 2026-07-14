import * as aboutRepository from "../repositories/aboutRepository.js";

export const fetchAbout = async () => {
  return await aboutRepository.getAbout();
};

export const editAbout = async (data) => {
  const {
    heading,
    subtitle,
    content,
  } = data;

  return await aboutRepository.updateAbout({
    heading,
    subtitle,
    content
  });
};