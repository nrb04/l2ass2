import { Schema, model } from "mongoose";
import { address, fullName, user } from "./UserManage.interface";

const addressSchema = new Schema<address>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

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

const userSchema = new Schema<user>(
  {
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
      select: false,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    hobbies: {
      type: [String], // Array of strings
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
      },
    },
  },
);

userSchema.pre("find", function (next) {
  this.where({ isDeleted: { $ne: true } });
  next();
});

userSchema.pre("findOne", function (next) {
  this.where({ isDeleted: { $ne: true } });
  next();
});

export const userModel = model<user>("user", userSchema);
