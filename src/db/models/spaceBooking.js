import mongoose from "mongoose";

const SpaceBookingSchema = mongoose.Schema(
  {
    space: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Space",
      required: true,
    },
    timespan: {
      type: Number,
      required: true,
    },
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const SpaceBooking = mongoose.model("SpaceBooking", SpaceBookingSchema);

export default SpaceBooking;
