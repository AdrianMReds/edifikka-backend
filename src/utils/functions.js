import jwt from "jsonwebtoken";
import { secret } from "../config/environment/index.js";

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};

export { generateToken };
