import { User } from "@models";
import bcrypt from "bcryptjs";

const userMutations = {
  createUser: async (_, { user }, { authScope, loaders }) => {
    if (authScope === "superadmin" || authScope === "admin") {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(user.password, salt);

      const newUser = new User({
        ...user,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      return loaders.user.one(savedUser._id);
    } else {
      console.log("Not authorized");
      return { status: 401, message: "Unauthorized" };
    }
  },
  updateUser: async (_, { id, user }, { authScope, loaders }) => {
    if (authScope === "superadmin" || authScope === "admin") {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: user },
        { new: true, runValidators: true }
      );
      return loaders.user.one(updatedUser._id);
    } else {
      console.log("Not authorized");
      return { status: 401, message: "Unauthorized" };
    }
  },
};

export default userMutations;
