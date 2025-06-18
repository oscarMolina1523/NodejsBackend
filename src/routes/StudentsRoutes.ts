import  express  from "express";
import { getAllStudents } from "../controllers/StudentsController";

const router= express.Router();

router.get("/", getAllStudents);

export default router;