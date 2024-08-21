import { Movement } from "@models";

const movementQueries = {
  movements: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const movements = await Movement.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.establishment.many(movements.map(({ id }) => id));
      },
      info: async () => {
        const count = await Movement.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    };
  },
  movement: async (_, { id }, { loaders }) => loaders.movement.one(id),
};

export default movementQueries;
