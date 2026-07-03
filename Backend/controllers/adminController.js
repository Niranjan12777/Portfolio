import * as adminService from "../services/adminService.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await adminService.loginAdmin(email, password);

    res.json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
  });
};
