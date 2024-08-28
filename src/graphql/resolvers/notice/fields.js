const noticeFields = {
  Notice: {
    postedBy: async ({ postedBy }, _, { loaders }) => {
      if (!postedBy) {
        return null;
      }
      return loaders.user.one(postedBy._id);
    },
  },
};

export default noticeFields;
