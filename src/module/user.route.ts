import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();
router.post("/createuser", UserController.createUser);
router.get("/", UserController.getAllUsers);
export const userroutes = router;
