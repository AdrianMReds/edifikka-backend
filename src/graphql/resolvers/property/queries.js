import { Property } from "@models";

const propertyQueries = {
  properties: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const properties = await Property.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.property.many(properties.map(({ id }) => id));
      },
      info: async () => {
        const count = await Property.countDocuments();

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
  property: async (_, { id }, { loaders }) => loaders.property.one(id),
};

export default propertyQueries;
