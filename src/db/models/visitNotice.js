import mongoose from "mongoose";

const VisitNoticeSchema = mongoose.Schema(
  {
    establishment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true,
    },
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    visitorName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const VisitNotice = mongoose.model("VisitNotice", VisitNoticeSchema);

export default VisitNotice;
