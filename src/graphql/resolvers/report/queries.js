import { Report } from "@models";

const reportQueries = {
  reports: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const reports = await Report.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.establishment.many(reports.map(({ id }) => id));
      },
      info: async () => {
        const count = await Report.countDocuments();

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
  report: async (_, { id }, { loaders }) => loaders.report.one(id),
};

export default reportQueries;
