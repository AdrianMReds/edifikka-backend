import { ApolloServer } from "apollo-server-express";
import schema from "./schema.js";
import { env } from "../config/environment/index.js";
// import context from "./context.js";

const playgroundSettings = {
  settings: {
    "editor.theme": "dark",
    "request.credentials": "include",
    "schema.polling.enable": false,
  },
};

const apolloServer = new ApolloServer({
  schema,
  playground: env.development,
  // context: (args) => context({ ...args }),
  // context,
  introspection: env.production !== true,
});

export default apolloServer;
