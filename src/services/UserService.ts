import { GenericCrudService } from "./GenericCrudService";
import { User, UserDTO } from "../models/User";
import { usersData } from "../data/usersData";

export default class UserService {
  private service: GenericCrudService<User>;

  constructor() {
    this.service = new GenericCrudService<User>(usersData);
  }

  getAllUsers() {
    return this.service.getAll();
  }

  getUserById(id: string) {
    return this.service.getById(id);
  }

  addUser(user: User) {
    return this.service.add(user);
  }

  updateUser(id: string, user: UserDTO) {
    return this.service.update(id, user);
  }

  deleteUser(id: string) {
    return this.service.delete(id);
  }
}
