const movementFields = {
  Movement: {
    establishment: async ({ establishment }, _, { loaders }) => {
      if (!establishment) {
        return null;
      }
      return loaders.establishment.one(establishment._id);
    },
    fee: async ({ fee }, _, { loaders }) => {
      if (!fee) {
        return null;
      }
      return loaders.fee.one(fee._id);
    },
    registeredBy: async ({ registeredBy }, _, { loaders }) => {
      if (!registeredBy) {
        return null;
      }
      return loaders.user.one(registeredBy._id);
    },
    madeBy: async ({ madeBy }, _, { loaders }) => {
      if (!madeBy) {
        return null;
      }
      return loaders.user.one(madeBy._id);
    },
  },
};
