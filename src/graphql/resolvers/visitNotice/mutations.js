import { VisitNotice } from "@models";

const visitNoticeMutations = {
  createVisitNotice: async (_, { visitNotice }, { loaders }) => {
    try {
      const newVisitNotice = new VisitNotice(visitNotice);

      const savedVisitNotice = await newVisitNotice.save();

      return loaders.visitnotice.one(savedVisitNotice._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateVisitNotice: async (_, { id, visitNotice }, { loaders }) => {
    try {
      const updatedVisitNotice = await VisitNotice.findByIdAndUpdate(
        id,
        { $set: visitNotice },
        { new: true, runValidators: true }
      );
      return loaders.visitnotice.one(updatedVisitNotice._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default visitNoticeMutations;
