import { Request, Response } from "express";
import { userServices } from "./user.service";
import { userModel } from "./user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const { users: userData } = req.body;
    const result = await userServices.createUserIntoDB(userData);

    res.status(201).json({
      success: true,
      message: "User is created successfully",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const users = await userServices.getUserById(Number(userId));

    if (!users) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

// const updateUser = async (req: Request, res: Response) => {
//   try {
//     const userId = parseInt(req.params.userId, 10);
//     const updatedUserData = req.body;
//     const updatedUser = await userServices.updateUser(userId, updatedUserData);

//     if (!updatedUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "User updated successfully",
//       data: updatedUser,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: err,
//     });
//   }
// };
const deleteUser = async (userId: number) => {
  const result = await userModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserController = {
  createUser,
  getAllUsers,
  getUserById,
  //   updateUser,

  deleteUser,
};
