import mongoose from "mongoose";

const PropertySchema = mongoose.Schema(
  {
    street: { type: String },
    number: { type: Number, required: true },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    responsible: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    indiviso: { type: Number },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertySchema);

export default Property;
