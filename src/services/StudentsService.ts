import { studentsData } from "../data/studentsData";
import { Student, StudentDTO } from "../models/Student";

export default class StudentsService {
  //we send the array of students to the client
 getStudents = (): Student[] => studentsData;
  
  //we send the specific student to the client by id
  getStudentById = (id: string): Student | undefined => {
    const student = studentsData.find((student) => student.id === id);
    if (!student) {
      throw new Error(`Student with id ${id} not found`);
    }
    return student;
  };
  
  //we add a new student to the array of students
  addStudent = (student: Student): boolean => {
    try {
      studentsData.push(student);
      return true;
    } catch {
      return false;
    }
  };
  
  //we update an existing student in the array of students
  updateStudent = (
    id: string,
    updatedStudent: StudentDTO
  ): { success: boolean; message: string } => {
    const student = studentsData.find((student) => student.id === id);
    if (student) {
      student.fullName = updatedStudent.fullName;
      student.age = updatedStudent.age;
      student.gender = updatedStudent.gender;
      student.grade = updatedStudent.grade;
      return {
        success: true,
        message: "Student updated successfully",
      };
    } else {
      return {
        success: false,
        message: `Student with id ${id} not found`,
      };
    }
  };
  
  //we delete a student using the id
  deleteStudent = (
    id: string
  ): { success: boolean; message: string } => {
    const student = studentsData.findIndex((student) => student.id === id);
    if (student !== -1) {
      studentsData.splice(student, 1);
      return {
        success: true,
        message: "Student deleted successfully",
      };
    } else {
      return {
        success: false,
        message: `Student with id ${id} not found`,
      };
    }
  };
}
