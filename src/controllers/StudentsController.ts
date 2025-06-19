import { Student } from "../models/Student";
import { getStudents, getStudentById } from "../services/StudentsService";
import { Request, Response } from "express";

export const getAllStudents=(req:Request, res:Response)=>{
    const students: Student[] = getStudents();
    res.status(200).json(students);
}

export const getAStudentById=(req:Request, res:Response)=>{
    const studentId = req.params.id;
    const student= getStudentById(studentId);
    if(student){
        res.status(200).json(student);
    }
    else{
        res.status(404).json({ message: "Student not found" });
    }
}