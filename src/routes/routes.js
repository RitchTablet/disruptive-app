import express from "express";
const router = express.Router();

import { getAllUsers, createUser } from "../controllers/userController.js";
import { login } from "../controllers/authController.js";

router.get("/users", getAllUsers);
router.post("/users", createUser);

router.post("/auth/login", login);

export default router;
