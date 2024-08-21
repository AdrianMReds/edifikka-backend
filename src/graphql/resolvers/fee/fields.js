const feeFields = {
  Fee: {
    establishment: async ({ establishment }, _, { loaders }) => {
      if (!establishment) {
        return null;
      }
      return loaders.establishment.one(establishment._id);
    },
    users: async ({ users }, _, { loaders }) => {
      if (!users || !users.length) {
        return [];
      }
      return loaders.user.many(users);
    },
    createdBy: async ({ createdBy }, _, { loaders }) => {
      if (!createdBy) {
        return null;
      }
      return loaders.user.one(createdBy._id);
    },
    updatedBy: async ({ updatedBy }, _, { loaders }) => {
      if (!updatedBy) {
        return null;
      }
      return loaders.user.one(updatedBy._id);
    },
  },
};

export default feeFields;
