import { AuthenticationError } from "apollo-server-express";
import { verify } from "jsonwebtoken";
import { secret } from "../config/environment";
import DataLoader from "dataloader";
import * as Models from "@models";

const allModels = Object.values(Models);

const createLoader = (Model) => {
  const loader = new DataLoader(async (keys) => {
    const data = await Model.find({ _id: { $in: keys } });

    // DataLoaders depends on the order of the input to return the result
    // So, it is needed to map results in order to create a correct output
    const dataMap = data.reduce((acc, curr) => {
      acc[curr._id] = curr;
      return acc;
    }, {});

    return keys.map((id) => dataMap[id]);
  });

  return {
    one: async (id) => loader.load(id.toString()),
    many: async (ids) => loader.loadMany(ids.map((id) => id.toString())),
  };
};

const context = async ({ req }) => {
  let token;
  const authorization = req.headers.authorization;

  if (authorization) {
    [, token] = authorization.split("Bearer ");
  }
  if (!token) {
    throw new AuthenticationError(
      "GraphQL API is only accessible with an access token"
    );
  }

  const user = verify(token, secret);

  const authScope = user.type;

  let loaders = {};

  allModels.forEach((model) => {
    loaders[model.modelName.toLowerCase()] = createLoader(model);
  });

  return { user, authScope, loaders };
};

export default context;
