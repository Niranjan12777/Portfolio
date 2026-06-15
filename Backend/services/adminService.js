import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getAdminByEmail } from "../repositories/adminRepository.js";
import { hashPassword, verifyPassword, signJwt } from "../utils/auth.js";

export const loginAdmin = async (email, password) => {
  const admin = await getAdminByEmail(email);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const matched = await verifyPassword(password, admin.password);

  if (!matched) {
    throw new Error("Invalid credentials");
  }

  const token = signJwt(
    {
      id: admin.id,
      email: admin.email
    }
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