import { Student } from "../models/Student";
import {
  getStudents,
  getStudentById,
  addStudent,
} from "../services/StudentsService";
import { Request, Response } from "express";

export const getAllStudents = (req: Request, res: Response) => {
  const students: Student[] = getStudents();
  res.status(200).json(students);
};

export const getAStudentById = (req: Request, res: Response) => {
  const studentId = req.params.id;
  const student = getStudentById(studentId);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

export const addAStudent = (req: Request, res: Response) => {
  const newStudent: Student = req.body;
  const result = addStudent(newStudent);
  if (result) {
    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  }
  else{
    res.status(400).json({ message: "Failed to add student" });
  }
};
