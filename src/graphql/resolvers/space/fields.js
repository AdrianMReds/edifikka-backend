const spaceFields = {
  Space: {
    establishment: async ({ establishment }, _, { loaders }) => {
      if (!establishment) {
        return null;
      }
      return loaders.establishment.one(establishment._id);
    },
  },
};

export default spaceFields;
