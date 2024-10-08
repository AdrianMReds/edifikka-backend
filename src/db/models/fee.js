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
      enum: ["monthly", "oneTime", "yearly"],
      required: true,
    },
    type: {
      type: String,
      enum: ["penalty", "regular", "fine", "custom", "indiviso"],
      required: true,
    },
    users: {
      type: [mongoose.Schema.Types.ObjectId],
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
