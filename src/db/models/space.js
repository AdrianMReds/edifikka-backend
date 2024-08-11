import mongoose from "mongoose";

const SpaceSchema = mongoose.Schema(
  {
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hourTimespan: {
      type: Number,
      required: true,
    },
    // En el futuro que tenga imágenes
    // images: {}
  },
  { timestamps: true }
);

const Space = mongoose.model("Space", SpaceSchema);

export default Space;
