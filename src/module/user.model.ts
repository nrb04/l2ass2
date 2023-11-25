import { Schema, model } from "mongoose";
import { address, fullName, user } from "./UserManage.interface";

// Address Schema
const addressSchema = new Schema<address>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true, // Assuming city is also required
  },
  country: {
    type: String,
    required: true,
  },
});

// Full Name Schema
const fullNameSchema = new Schema<fullName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// User Schema
const userSchema = new Schema<user>({
  address: addressSchema,
  fullName: fullNameSchema,
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
  hobbies: {
    type: [String], // Array of strings
  },
});

// User Model
export const userModel = model<user>("user", userSchema);
