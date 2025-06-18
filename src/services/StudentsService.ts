import { students } from "../data/studentsData";
import { Student } from "../models/Student";
//we send the array of students to the client
export const getStudents = (): Student[] => students;