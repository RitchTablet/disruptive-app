import express from "express";
const router = express.Router();

import { authenticate } from "../middlewares/authenticate.js";
import { authorize } from "../middlewares/authorize.js";

import { getEcho } from "../controllers/echoController.js";
import { getAllUsers, createUser } from "../controllers/userController.js";
import { login } from "../controllers/authController.js";
import { getRoles } from "../controllers/rolesController.js";
import { getPermisions } from "../controllers/permissionsController.js";

router.get("/echo", authenticate, authorize("admin", ["crear"]), getEcho);

router.get("/users", getAllUsers);
router.post("/users", createUser);

router.post("/auth/login", login);

router.get("/roles", getRoles);
router.get("/permissions", getPermisions);

export default router;
