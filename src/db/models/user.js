import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, required: [true, "Agrega un nombre"] },
  lastname: { type: String, required: [true, "Agrega apellidos"] },
  email: {
    type: String,
    required: [true, "Agrega un email"],
    unique: true,
  },
  password: { type: String, required: [true, "Agrega un password"] },
  birthday: { type: Date },
  type: {
    type: String,
    enum: ["superadmin", "admin", "resident"],
    required: true,
  },
  status: {
    type: String,
    enum: ["debt", "normal"],
    default: "normal",
  },
  establishment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Establishment",
    required: false,
  },
});
