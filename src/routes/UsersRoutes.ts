import express from "express";
import UsersController from "../controllers/UsersController";

const router = express.Router();
const userController = new UsersController();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         fullName:
 *           type: string
 *           description: The full name of the User
 *         email:
 *           type: string
 *           description: The email of the User
 *         password:
 *           type: string
 *           description: The password of the User
 *         role:
 *           type: string
 *           description: The role of the User (e.g., admin, student, teacher)
 *       example:
 *         id: kskbVGJjgv
 *         fullName: Eduardo Jose Rodriguez
 *         email: eduardo@gmail.com
 *         password: 123456
 *         role: admin
 *
 *     UserDTO:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         fullName:
 *           type: string
 *           description: The full name of the User
 *         email:
 *           type: string
 *           description: The email of the User
 *         password:
 *           type: string
 *           description: The password of the User
 *         role:
 *           type: string
 *           description: The role of the User (e.g., admin, student, teacher)
 *       example:
 *         id: kskbVGJjgv
 *         fullName: Eduardo Jose Rodriguez
 *         email: eduardo@gmail.com
 *         password: 123456
 *         role: admin
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
