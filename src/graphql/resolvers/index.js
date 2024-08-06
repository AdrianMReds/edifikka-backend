import fs from "fs";
import { join } from "path";

let resolvers = {
  Query: {},
  Mutation: {},
};

(function loadResolvers(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const path = join(dir, file);
    if (fs.statSync(path).isDirectory()) {
      //Es un folder y ejecutamos recursión
      return loadResolvers(path);
    } else {
      //No es un folder y no ejecutamos recursión

      let resolversAt = undefined;

      if (path.endsWith("queries.js")) {
        resolversAt = "Query";
      } else if (path.endsWith("mutations.js")) {
        resolversAt = "Mutation";
      }

      if (resolversAt) {
        // Se agregan resolvers del archivo + resolvers acumulados hasta ahorita
        resolvers[resolversAt] = {
          ...require(path).default,
          ...resolvers[resolversAt],
        };
      } else {
        // Se agregan fields por aparte de los queries y mutations
        resolvers = {
          ...require(path).default,
          ...resolvers,
        };
      }
    }
  });
})(__dirname);

export default resolvers;
