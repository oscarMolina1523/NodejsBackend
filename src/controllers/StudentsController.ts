import { Student } from "../models/Student";
import { getStudents } from "../services/StudentsService";
import { Request, Response } from "express";

export const getAllStudents=(req:Request, res:Response)=>{
    const students: Student[] = getStudents();
    res.status(200).json(students);
}