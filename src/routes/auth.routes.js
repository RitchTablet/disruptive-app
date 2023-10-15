import express from "express";
const router = express.Router();

import { login } from "../controllers/authController.js";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Operaciones relacionadas con autenticacion
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Ayuda a la auntenticacion de usuarios
 *     tags: [Auth]
 */
router.post("/login", login);

export default router;
