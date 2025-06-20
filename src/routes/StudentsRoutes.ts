import express from "express";
import StudentsController from "../controllers/StudentsController";
const router = express.Router();
const studentController = new StudentsController();

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
 *           description: The grade of the student
 *         gender:
 *           type: string
 *           description: The gender of the student
 *       example:
 *         id: kskbVGJV4G6T
 *         fullName: Ted Junior Rodgers
 *         age: 10
 *         grade: First Grade
 *         gender: male
 *
 *     StudentDTO:
 *       type: object
 *       required:
 *         - fullName
 *         - age
 *         - grade
 *         - gender
 *       properties:
 *         fullName:
 *           type: string
 *           description: The full name of the student
 *         age:
 *           type: integer
 *           description: The age of the student
 *         grade:
 *           type: string
 *           description: The grade of the student
 *         gender:
 *           type: string
 *           description: The gender of the student
 *       example:
 *         fullName: Ted Junior Rodgers
 *         age: 10
 *         grade: First Grade
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
router.get("/", studentController.getAllStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID
 *     responses:
 *       200:
 *         description: The student data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.get("/:id", studentController.getAStudentById);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Add a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentDTO'
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", studentController.addAStudent);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update an existing student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentDTO'
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 */
router.put("/:id", studentController.updateAStudent);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
router.delete("/:id", studentController.deleteAStudent);

export default router;
