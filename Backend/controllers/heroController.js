import { fetchHeroSection, editHeroSection } from "../services/heroService.js";

export const getHero = async (req, res) => {
  try {
    const hero = await fetchHeroSection();

    res.status(200).json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateHero = async (req, res) => {
  try {
    const hero = await editHeroSection();

    res.status(200).json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};