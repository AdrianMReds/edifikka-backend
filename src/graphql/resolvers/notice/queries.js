import { Notice } from "@models";

const noticeQueries = {
  notices: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const notices = await Notice.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.notice.many(notices.map(({ id }) => id));
      },
      info: async () => {
        const count = await Notice.countDocuments();

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
  notice: async (_, { id }, { loaders }) => loaders.notice.one(id),
};

export default noticeQueries;
