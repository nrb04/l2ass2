import { user } from "./UserManage.interface";
import { userModel } from "./user.model";

const createUserIntoDB = async (newUser: user) => {
  const result = await userModel.create(newUser);
  return result;
};

const getAllUsers = async () => {
  const users = await userModel.find();
  return users;
};

const getUserById = async (userId: number) => {
  const users = await userModel.findOne({ userId });
  return users;
};
const updateUserdata = async (userId: number) => {
  const users = await userModel.findOne({ userId });
  return users;
};
const deletedUser = async (userId: number) => {
  const users = await userModel.updateOne({ userId }, { isdeleted: true });
  return users;
};

export const userServices = {
  createUserIntoDB,
  getAllUsers,
  getUserById,
  updateUserdata,
  deletedUser,
};
