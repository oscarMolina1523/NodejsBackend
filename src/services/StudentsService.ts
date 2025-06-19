import { students } from "../data/studentsData";
import { Student, StudentDTO } from "../models/Student";
//we send the array of students to the client
export const getStudents = (): Student[] => students;

//we send the specific student to the client by id
export const getStudentById = (id: string): Student | undefined => {
  const student = students.find((student) => student.id === id);
  if (!student) {
    throw new Error(`Student with id ${id} not found`);
  }
  return student;
};

//we add a new student to the array of students
export const addStudent = (student: Student): boolean => {
  try{
    students.push(student);
    return true;
  }catch{
    return false;
  }
};

//we update an existing student in the array of students
export const updateStudent = (id: string, updatedStudent: StudentDTO) => {
  const student = students.find((student) => student.id === id);
  if (student) {
    student.fullName = updatedStudent.fullName;
    student.age = updatedStudent.age;
    student.gender = updatedStudent.gender;
    student.grade = updatedStudent.grade;
  } else {
    throw new Error(`Student with id ${id} not found`);
  }
};

//we delete a student using the id
export const deleteStudent = (id: string): void => {
  const student = students.findIndex((student) => student.id === id);
  if (student !== -1) {
    students.splice(student, 1);
  } else {
    throw new Error(`Student with id ${id} not found`);
  }
};
