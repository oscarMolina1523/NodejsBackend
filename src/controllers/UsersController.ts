import { User } from './../models/User';
import { Response, Request } from "express";
import UserService from "../services/UserService";
import { generateId } from '../utils/GenerateId';

export default class UsersController {
    private service : UserService;

    constructor() {
        this.service = new UserService();
    }

    getAllUsers=(req: Request, res: Response) => {
        const users= this.service.getAllUsers();
        res.status(200).json(users);
    }

    getUserById=(req: Request, res: Response) => {
        const userId = req.params.id;
        const user = this.service.getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }

    addUser=(req: Request, res: Response) => {
        const userData= req.body;
        const completeUser={
            ...userData,
            id: generateId() 
        }
        const newUser = this.service.addUser(completeUser);
        if (newUser) {
            res.status(201).json(newUser);
        } else {
            res.status(400).json({ message: "Failed to add user" });
        }
    }

    updateUser=(req: Request, res: Response) => {
        const userId = req.params.id;
        const updatedData = req.body;
        const result = this.service.updateUser(userId, updatedData);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(404).json({ message: result.message });
        }
    }
}