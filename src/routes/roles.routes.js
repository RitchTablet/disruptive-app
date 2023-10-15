import express from "express";
const router = express.Router();

import { getRoles } from "../controllers/rolesController.js";

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Operaciones relacionadas con Roles de usuarios
 */

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Obtiene una lista de todos los roles
 *     tags: [Roles]
 */
router.get("/", getRoles);

export default router;
