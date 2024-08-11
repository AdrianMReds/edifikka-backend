import mongoose from "mongoose";

const FeeSchema = mongoose.Schema(
  {
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    frequency: {
      type: String,
      enum: ["monthly", "one-time", "yearly"],
      required: true,
    },
    type: {
      type: String,
      enum: ["penalty", "regular-fee", "fine", "personalizada", "indiviso"],
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Fee = mongoose.model("Fee", FeeSchema);

export default Fee;
