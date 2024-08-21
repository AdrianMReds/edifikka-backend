import { Movement } from "@models";

const movementMutations = {
  createMovement: async (_, { movement }, { loaders }) => {
    try {
      const newMovement = new Movement(movement);

      const savedMovement = await newMovement.save();

      return loaders.movement.one(savedMovement._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateMovement: async (_, { id, movement }, { loaders }) => {
    try {
      const updatedMovement = await Movement.findByIdAndUpdate(
        id,
        { $set: movement },
        { new: true, runValidators: true }
      );
      return loaders.movement.one(updatedMovement._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default movementMutations;
