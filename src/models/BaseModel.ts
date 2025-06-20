export interface BaseModel {
  id: string;
}

export interface BaseStudent {
  fullName: string;
  age: number;
  grade: string;
  gender: string;
}

export interface BaseUser {
  fullName: string;
  email: string;
  password: string;
  role: string;
}
