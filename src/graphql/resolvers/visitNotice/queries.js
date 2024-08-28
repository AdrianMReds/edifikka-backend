import { VisitNotice } from "@models";

const visitNoticeQueries = {
  visitNotices: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const visitNotices = await VisitNotice.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.visitnotice.many(visitNotices.map(({ id }) => id));
      },
      info: async () => {
        const count = await VisitNotice.countDocuments();

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
  visitNotice: async (_, { id }, { loaders }) => loaders.visitnotice.one(id),
};

export default visitNoticeQueries;
