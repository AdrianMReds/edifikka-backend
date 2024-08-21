import { Fee } from "@models";

const feeQueries = {
  fees: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const fees = await Fee.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.fee.many(fees.map(({ id }) => id));
      },
      info: async () => {
        const count = await Fee.countDocuments();

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
  fee: async (_, { id }, { loaders }) => loaders.fee.one(id),
};

export default feeQueries;
