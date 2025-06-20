import express from "express";
import UsersController from "../controllers/UsersController";

const router = express.Router();
const userController = new UsersController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);