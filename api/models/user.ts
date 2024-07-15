import { Schema, model, Document } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  deliveryAddress?: string;
  homeAddress: string;
}

const userSchema = new Schema<User>({
  name: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
  profilePicture: { required: true, type: String },
  deliveryAddress: { type: String },
  homeAddress: { required: true, type: String },
});

export const user = model<User>("User", userSchema); // convert schema to model
