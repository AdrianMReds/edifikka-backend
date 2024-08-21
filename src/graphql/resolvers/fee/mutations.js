import { Fee } from "@models";

const feeMutations = {
  createFee: async (_, { fee }, { loaders }) => {
    try {
      const newFee = new Fee(fee);

      const savedFee = await newFee.save();

      return loaders.fee.one(savedFee._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateFee: async (_, { id, fee }, { loaders }) => {
    try {
      const updatedFee = await Fee.findByIdAndUpdate(
        id,
        { $set: fee },
        { new: true, runValidators: true }
      );
      return loaders.fee.one(updatedFee._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default feeMutations;
