import mongoose from "mongoose";

const BankAccountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bank: {
      type: String,
      // enum de bancos
      required: true,
    },
    balance: {
      type: Number,
      default: 0.0,
    },
    movements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movement",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const BankAccount = mongoose.model("BankAccount", BankAccountSchema);

export default BankAccount;
