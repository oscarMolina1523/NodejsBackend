import { students } from "../data/studentsData";
import { Student, StudentDTO } from "../models/Student";
//we send the array of students to the client
export const getStudents = (): Student[] => students;

export const getStudentById = (id: string): Student | undefined => {
  return students.find((student) => student.id === id);
};

export const addStudent = (student : Student): void =>{
    students.push(student);
}

export const updateStudent= (id:string, updatedStudent: StudentDTO)=>{
    const student = students.find((student) => student.id === id);
    if(student){
        student.fullName= updatedStudent.fullName;
        student.age = updatedStudent.age;
        student.gender = updatedStudent.gender;
        student.grade = updatedStudent.grade;
    }
    else{
        throw new Error(`Student with id ${id} not found`);
    }
}