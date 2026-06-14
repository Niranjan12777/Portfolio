import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPasswaord = async (password) => {
  return bcrypt.hash(password, 10);
};

export const verifyPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const signJwt = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );
};