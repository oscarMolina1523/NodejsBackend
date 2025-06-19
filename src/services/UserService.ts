import { GenericCrudService } from "./GenericCrudService";
import { User } from "../models/User";
import { usersData } from "../data/usersData";

export const userService = new GenericCrudService<User>(usersData);