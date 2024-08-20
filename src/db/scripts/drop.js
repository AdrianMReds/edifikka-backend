import { connection } from "mongoose";
import connectDB from "../";
import { env } from "../../config/environment";
import * as Models from "@models";

const drop = () => {
  if (env.development) {
    (async () => {
      console.log("Dropping tables...");

      await connectDB();

      for (const model of Object.values(Models)) {
        await model.deleteMany({});
      }

      console.log("Database clean");
      connection.close();
    })();
  } else {
    console.log("Can't run this script on a staging/production environment!");
  }
};

drop();
