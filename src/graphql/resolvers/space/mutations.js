import { Space } from "@models";

const spaceMutations = {
  createSpace: async (_, { space }, { loaders }) => {
    try {
      const newSpace = new Space(space);

      const savedSpace = await newSpace.save();

      return loaders.space.one(savedSpace._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateSpace: async (_, { id, space }, { loaders }) => {
    try {
      const updatedSpace = await Space.findByIdAndUpdate(
        id,
        { $set: space },
        { new: true, runValidators: true }
      );
      return loaders.space.one(updatedSpace._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default spaceMutations;
