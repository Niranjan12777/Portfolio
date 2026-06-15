import { loginAdmin } from "../services/adminService.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginAdminService(email, password);

    res.json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};