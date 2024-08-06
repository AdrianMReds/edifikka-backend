import connectDB from "./db";
import app from "./app.js";

import { port } from "./config/environment/index.js";

const start = async () => {
  try {
    await connectDB();
    console.log("Connected to database");
    await app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
