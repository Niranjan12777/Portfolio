import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getAdminByEmail } from "../repositories/adminRepository.js";

export const loginAdmin = async (email, password) => {
  const admin = await getAdminByEmail(email);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const matched = await bcrypt.compare(password, admin.password);

  if (!matched) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: admin.id,
      email: admin.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    admin: {
      id: admin.id,
      name: admin.name,
      email: admin.email
    }
  };
};