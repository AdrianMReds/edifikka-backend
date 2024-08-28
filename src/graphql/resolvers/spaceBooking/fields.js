const spaceBookingFields = {
  SpaceBooking: {
    space: async ({ space }, _, { loaders }) => {
      if (!space) {
        return null;
      }
      return loaders.space.one(space._id);
    },
    madeBy: async ({ madeBy }, _, { loaders }) => {
      if (!madeBy) {
        return null;
      }
      return loaders.user.one(madeBy._id);
    },
  },
};

export default spaceBookingFields;
