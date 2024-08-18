import mongoose from "mongoose";

import mongooseDelete from "mongoose-delete";

const UserSchema = mongoose.Schema(
  {
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
      enum: ["superadmin", "admin", "resident", "owner", "special"],
      required: true,
    },
    status: {
      type: String,
      enum: ["debt", "normal"],
      default: "normal",
    },
    establishments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Establishment",
      required: false,
      default: [],
    },
    // Cambiar después a que haya una colección de permits
    permits: {
      type: [String],
      required: false,
      default: ["all"],
    },
  },
  { timestamps: true }
);

UserSchema.plugin(mongooseDelete);

const User = mongoose.model("User", UserSchema);

export default User;
