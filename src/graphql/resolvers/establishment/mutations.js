import { Establishment } from "@models";

const establishmentMutations = {
  createEstablishment: async (_, { establishment }, { loaders }) => {
    try {
      const newEstablishment = new Establishment(establishment);

      const savedEstablishment = await newEstablishment.save();

      return loaders.establishment.one(savedEstablishment._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateEstablishment: async (_, { id, establishment }, { loaders }) => {
    try {
      const updatedEstablishment = await Establishment.findByIdAndUpdate(
        id,
        { $set: establishment },
        { new: true, runValidators: true }
      );
      return loaders.establishment.one(updatedEstablishment._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default establishmentMutations;
