import mongoose from "mongoose";

const MovementSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["entry", "expense"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    fee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fee",
    },
    registeredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Movement = mongoose.model("Movement", MovementSchema);

export default Movement;
