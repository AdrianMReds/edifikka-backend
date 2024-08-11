import mongoose from "mongoose";

const ReportSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["space", "damage", "other"],
      required: true,
    },
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", ReportSchema);

export default Report;
