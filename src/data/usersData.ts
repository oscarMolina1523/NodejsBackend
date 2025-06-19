import { User } from "../models/User";

export let usersData: User[];

usersData = [
  { id: "user1", fullName: "Alice Smith", password: "30", email: "alice@example", role: "admin" },
  { id: "user2", fullName: "Bob Johnson", password:"25", email: "", role: "tutor" },
];
