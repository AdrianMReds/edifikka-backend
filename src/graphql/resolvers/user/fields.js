const userFields = {
  User: {
    establishments: async ({ establishments }, _, { loaders }) => {
      if (establishments) {
        return loaders.establishment.many(establishments.map(({ id }) => id));
      } else {
        return [];
      }
    },
  },
};

export default userFields;
