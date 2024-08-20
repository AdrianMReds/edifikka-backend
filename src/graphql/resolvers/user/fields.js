const userFields = {
  User: {
    establishments: async ({ establishments }, _, { loaders }) => {
      if (!establishments || !establishments.length) {
        return [];
      }
      return loaders.establishment.many(establishments);
    },
  },
};

export default userFields;
