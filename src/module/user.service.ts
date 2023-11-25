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
  const user = await userModel.findById(userId);
  return user;
};

const updateUser = async (userId: number, updatedUserData: Partial<user>) => {
  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    updatedUserData,
    {
      new: true,
    },
  );
  return updatedUser;
};

const deleteUser = async (userId: number) => {
  const deletedUser = await userModel.findByIdAndDelete(userId);
  return deletedUser;
};

export const userServices = {
  createUserIntoDB,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
