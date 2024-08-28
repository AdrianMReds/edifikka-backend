const propertyFields = {
  Property: {
    users: async ({ users }, _, { loaders }) => {
      if (!users || !users.length) {
        return [];
      }
      return loaders.user.many(users);
    },
    owner: async ({ owner }, _, { loaders }) => {
      if (!owner) {
        return null;
      }
      return loaders.user.one(owner._id);
    },
    responsible: async ({ responsible }, _, { loaders }) => {
      if (!responsible) {
        return null;
      }
      return loaders.user.one(responsible._id);
    },
    establishment: async ({ establishment }, _, { loaders }) => {
      if (!establishment) {
        return null;
      }
      return loaders.establishment.one(establishment._id);
    },
  },
};

export default propertyFields;
