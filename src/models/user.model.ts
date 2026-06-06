import mongoose, { Schema, model, Document, Model } from "mongoose";

// 1. Core data interface (omitting Mongoose internals)
export interface IUser {
  name: string;
  email: string;
  mobile: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Document interface for Mongoose methods/queries
export interface IUserDocument extends IUser, Document {}

// 3. Schema definition with exact type safety
const userSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    mobile: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
    versionKey: false, // Optional: removes the "__v" field from documents
  },
);

// 4. Safe model compilation for serverless environments
const UserModel: Model<IUserDocument> =
  mongoose.models.User || model<IUserDocument>("User", userSchema);

export default UserModel;
