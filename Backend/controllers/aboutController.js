import * as aboutService from "../services/aboutService.js";

export const getAbout = async (req, res) => {
  try {
    const about = await aboutService.fetchAbout();

    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const about = await aboutService.editAbout(req.body);

    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};