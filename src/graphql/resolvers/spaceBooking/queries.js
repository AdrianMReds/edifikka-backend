import { SpaceBooking } from "@models";

const spaceBookingQueries = {
  spaceBookings: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const spaceBookings = await SpaceBooking.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.spacebooking.many(spaceBookings.map(({ id }) => id));
      },
      info: async () => {
        const count = await SpaceBooking.countDocuments();

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
  spaceBooking: async (_, { id }, { loaders }) => loaders.spacebooking.one(id),
};

export default spaceBookingQueries;
