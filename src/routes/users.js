import { Router } from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  getUserById,
} from "../services/users.services.js";
const users = Router();

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  res.status(200).json({
    status: 200,
    result: allUsers,
  });
});

users.post("/add", async (req, res) => {
  const { name, username, age } = req.body;

  if (!name || !username || !age) {
    res.status(400).json({
      status: 400,
      message: "this fields are required (name, username or age)",
    });
  } else {
    await createUser(req.body);
    res.status(201).json({
      status: 201,
      message: "User Added Successfully",
    });
  }
});

users.get("/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  if (user) {
    res.status(200).json({
      status: 200,
      result: user,
    });
  }
});

users.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (await deleteUser(id)) {
    res.status(201).json({
      status: 201,
      message: "User Deleted Successfully",
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Inavlid Id",
    });
  }
});

export default users;
