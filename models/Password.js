import mongoose, { Schema, models } from "mongoose";

const passwordSchema = new Schema(
  {
    siteName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    iv: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Password = models.Password || mongoose.model("Password", passwordSchema);
export default Password;
