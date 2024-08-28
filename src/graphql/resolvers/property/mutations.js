import { Property } from "@models";

const propertyMutations = {
  createProperty: async (_, { property }, { loaders }) => {
    try {
      const newProperty = new Property(property);

      const savedProperty = await newProperty.save();

      return loaders.property.one(savedProperty._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateProperty: async (_, { id, property }, { loaders }) => {
    try {
      const updatedProperty = await Property.findByIdAndUpdate(
        id,
        { $set: property },
        { new: true, runValidators: true }
      );
      return loaders.property.one(updatedProperty._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default propertyMutations;
