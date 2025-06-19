import { Response, Request } from "express";
import UserService from "../services/UserService";

export default class UsersController {
    private service : UserService;

    constructor() {
        this.service = new UserService();
    }

    getAllUsers=(req: Request, res: Response) => {
        const users= this.service.getAllUsers();
        res.status(200).json(users);
    }
}