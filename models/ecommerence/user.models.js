import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password should be at least 8 characters long"],
      match: [/\d/, "Password should contain at least one number"],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
