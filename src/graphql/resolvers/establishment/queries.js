import { Establishment } from "@models";

const establishmentQueries = {
  establishments: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const establishments = await Establishment.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.establishment.many(establishments.map(({ id }) => id));
      },
      info: async () => {
        const count = await Establishment.countDocuments();

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
  establishment: async (_, { id }, { loaders }) =>
    loaders.establishment.one(id),
};

export default establishmentQueries;
