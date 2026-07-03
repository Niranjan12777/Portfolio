import { getHeroSection, updateHeroSection } from "../repositories/heroSectionRepository.js";

export const fetchHeroSection = async () => {
  return await getHeroSection();
}

export const editHeroSection = async (data) => {
  const {
    portfolio_title,
    name,
    role,
    description,
    hero_image
  } = data;

  return await updateHeroSection({
    portfolioTitle: portfolio_title,
    name,
    role,
    description,
    heroImage: hero_image
  });
};

