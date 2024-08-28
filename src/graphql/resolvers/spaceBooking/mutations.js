import { SpaceBooking } from "@models";

const spaceBookingMutations = {
  createSpaceBooking: async (_, { spaceBooking }, { loaders }) => {
    try {
      const newSpaceBooking = new SpaceBooking(spaceBooking);

      const savedSpaceBooking = await newSpaceBooking.save();

      return loaders.spacebooking.one(savedSpaceBooking._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateSpaceBooking: async (_, { id, spaceBooking }, { loaders }) => {
    try {
      const updatedSpaceBooking = await SpaceBooking.findByIdAndUpdate(
        id,
        { $set: spaceBooking },
        { new: true, runValidators: true }
      );
      return loaders.spacebooking.one(updatedSpaceBooking._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default spaceBookingMutations;
