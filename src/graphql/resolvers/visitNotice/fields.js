const visitNoticeFields = {
  VisitNotice: {
    establishment: async ({ establishment }, _, { loaders }) => {
      if (!establishment) {
        return null;
      }
      return loaders.establishment.one(establishment._id);
    },
    madeBy: async ({ madeBy }, _, { loaders }) => {
      if (!madeBy) {
        return null;
      }
      return loaders.user.one(madeBy._id);
    },
  },
};

export default visitNoticeFields;
