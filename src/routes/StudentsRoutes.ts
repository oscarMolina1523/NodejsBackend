import express from "express";
import { getAllStudents, getAStudentById, addAStudent, updateAStudent, deleteAStudent } from "../controllers/StudentsController";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - fullName
 *         - age
 *         - grade
 *         - gender
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the student
 *         fullName:
 *           type: string
 *           description: The full name of the student
 *         age:
 *           type: integer
 *           description: The age of the student
 *         grade:
 *           type: string
 *           description: The id grade of the student
 *         gender:
 *           type: string
 *           description: The gender of the student
 *       example:
 *         id: kskbVGJV4G6T
 *         fullName: Ted Junior Rodgers
 *         age: 10
 *         grade: khabckGCJVgc6
 *         gender: male
 */

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The Students managing API
 */

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns the list of all the Students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: The list of the Students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */

router.get("/students", getAllStudents);

router.get("/students/:id", getAStudentById);

router.post("/students", addAStudent);

router.put("/students/:id", updateAStudent);

router.delete("/students/:id", deleteAStudent);

export default router;
