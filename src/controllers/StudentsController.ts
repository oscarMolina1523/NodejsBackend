import { Student, StudentDTO } from "../models/Student";
import StudentsService from "../services/StudentsService";
import { Request, Response } from "express";
import { generateId } from "../utils/GenerateId";

export default class StudentsController {
  private services: StudentsService;

  constructor() {
    this.services = new StudentsService();
  }
  getAllStudents = (req: Request, res: Response) => {
    const students: Student[] = this.services.getStudents();
    res.status(200).json(students);
  };
  
  getAStudentById = (req: Request, res: Response) => {
    const studentId = req.params.id;
    const student = this.services.getStudentById(studentId);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  };
  
  addAStudent = (req: Request, res: Response) => {
    const newStudent: StudentDTO = req.body;
    const completeStudent: Student = {
      id: generateId(),
      fullName: newStudent.fullName,
      age: newStudent.age,
      gender: newStudent.gender,
      grade: newStudent.grade,
    };
    const result = this.services.addStudent(completeStudent);
    if (result) {
      res
        .status(201)
        .json({ message: "Student added successfully", student: newStudent });
    } else {
      res.status(400).json({ message: "Failed to add student" });
    }
  };
  
  updateAStudent = (req: Request, res: Response) => {
    const studentId = req.params.id;
    const updatedStudent: StudentDTO = req.body;
    const response = this.services.updateStudent(studentId, updatedStudent);
    if (response.success) {
      res.status(200).json({ message: response.message });
    } else {
      res.status(404).json({ message: response.message });
    }
  };
  
  deleteAStudent = (req: Request, res: Response) => {
    const studentId: string = req.params.id;
    const response = this.services.deleteStudent(studentId);
    if (response.success) {
      res.status(200).json({ message: response.message });
    } else {
      res.status(404).json({ message: response.message });
    }
  };
}

