import mongoose, { Schema, model, Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  mobile: string;
  address: string;
  createdAt?: Date;
}

export interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true },
);

const UserModel: Model<IUserDocument> =
  (mongoose.models.User as Model<IUserDocument>) ||
  model<IUserDocument>("User", userSchema);

export default UserModel;
