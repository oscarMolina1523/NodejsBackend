import { BaseModel } from "./BaseModel";

export interface User extends BaseModel{
    fullName: string;
    email: string;
    password: string;
    role: string; 
};