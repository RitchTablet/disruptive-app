import express from "express";
const router = express.Router();

import { getAllUsers, createUser } from "../controllers/userController.js";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con Usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene una lista de todos los usuarios
 *     tags: [Users]
 */
router.get("/users", getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Nos permite crear un nuevo usuario
 *     tags: [Users]
 */
router.post("/users", createUser);

export default router;
