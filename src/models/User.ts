import { BaseModel, BaseUser } from "./BaseModel";

export interface User extends BaseModel, BaseUser{};

export interface UserDTO extends BaseUser{};