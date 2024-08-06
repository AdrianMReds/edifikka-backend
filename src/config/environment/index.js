import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;

const secret = process.env.JWT_SECRET;

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};

export { MONGODB_URI, port, secret, env };
