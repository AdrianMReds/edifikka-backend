import { Space } from "@models";

const spaceQueries = {
  spaces: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const spaces = await Space.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.space.many(spaces.map(({ id }) => id));
      },
      info: async () => {
        const count = await Space.countDocuments();

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
  space: async (_, { id }, { loaders }) => loaders.space.one(id),
};

export default spaceQueries;
