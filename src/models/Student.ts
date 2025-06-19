import { BaseModel, BaseStudent } from "./BaseModel";

export interface Student extends BaseModel, BaseStudent{};

export interface StudentDTO extends BaseStudent{};
