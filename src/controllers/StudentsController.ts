import { Student, StudentDTO } from "../models/Student";
import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/StudentsService";
import { Request, Response } from "express";
import { generateId } from "../utils/GenerateId";

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
  const newStudent: StudentDTO = req.body;
  const completeStudent: Student = {
    id: generateId(),
    fullName: newStudent.fullName,
    age: newStudent.age,
    gender: newStudent.gender,
    grade: newStudent.grade,
  };
  const result = addStudent(completeStudent);
  if (result) {
    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  } else {
    res.status(400).json({ message: "Failed to add student" });
  }
};

export const updateAStudent = (req: Request, res: Response) => {
  const studentId = req.params.id;
  const updatedStudent: StudentDTO = req.body;
  const response = updateStudent(studentId, updatedStudent);
  if (response.success) {
    res.status(200).json({ message: response.message });
  } else {
    res.status(404).json({ message: response.message });
  }
};

export const deleteAStudent = (req: Request, res: Response) => {
  const studentId: string = req.params.id;
  const response = deleteStudent(studentId);
  if (response.success) {
    res.status(200).json({ message: response.message });
  } else {
    res.status(404).json({ message: response.message });
  }
};
