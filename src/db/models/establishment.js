import mongoose from "mongoose";

const EstablishmentSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Agrega un nombre"] },
    location: { type: String, required: true },
    type: {
      type: String,
      enum: ["neighborhood", "condominum"],
      required: true,
    },
    admins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    bankAccounts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "BankAccount",
    },
    indiviso: [
      {
        property: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Property",
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Establishment = mongoose.model("Establishment", EstablishmentSchema);

export default Establishment;
