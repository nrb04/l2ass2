import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/createuser", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:userId", UserController.getUserById);
// router.put("/:userId", UserController.updateUser);
router.delete("/:userId", UserController.deleteUser);
export const userroutes = router;
