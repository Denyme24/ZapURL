import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const authUserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Check if the model already exists before defining it
const AuthUser = models.AuthUser || model("AuthUser", authUserSchema);
export default AuthUser;
