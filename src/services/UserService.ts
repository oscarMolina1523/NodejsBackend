import { GenericCrudService } from "./GenericCrudService";
import { User } from "../models/User";
import { users } from "../data/usersData";

export const studentService = new GenericCrudService<User>(users);