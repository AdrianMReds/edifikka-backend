import { Notice } from "@models";

const noticeMutations = {
  createNotice: async (_, { notice }, { loaders }) => {
    try {
      const newNotice = new Notice(notice);

      const savedNotice = await newNotice.save();

      return loaders.notice.one(savedNotice._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateNotice: async (_, { id, notice }, { loaders }) => {
    try {
      const updatedNotice = await Notice.findByIdAndUpdate(
        id,
        { $set: notice },
        { new: true, runValidators: true }
      );
      return loaders.notice.one(updatedNotice._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default noticeMutations;
