import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
// import auth from "./routes/auth.js";
import graphqlServer from "./graphql/index.js";

const app = express();

app.use(express.json(), cors(), cookieParser());
// app.use("/auth", auth);

async function startServer(httpServer) {
  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app, cors: false }); // cors is set to false because you already applied it in your express app
}

const httpServer = http.createServer(app);
startServer(httpServer);

export default httpServer;
