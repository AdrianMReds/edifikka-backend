import mongoose from "mongoose";
import { MONGODB_URI } from "../config/environment";

let isConnected;
let db;

const connectDB = async () => {
  if (isConnected) return db;

  try {
    db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState;
    return db;
  } catch (err) {
    throw new Error(err);
  }
};

export default connectDB;
