import { User } from "@models";

const userQueries = {
  users: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const users = await User.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        console.log(users);

        return loaders.user.many(users.map(({ id }) => id));
      },
      info: async () => {
        const count = await User.countDocuments();

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
  user: async (_, { id }, { loaders }) => loaders.user.one(id),
};

export default userQueries;
