import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// Create a new user
router.post("/createuser", UserController.createUser);

// Retrieve all users
router.get("/", UserController.getAllUsers);

// Retrieve a specific user by ID
router.get("/:userId", UserController.getUserById);

// Update user information
router.put("/:userId", UserController.updateUser);

router.delete("/:userId", UserController.deleteUser);

export const userroutes = router;
