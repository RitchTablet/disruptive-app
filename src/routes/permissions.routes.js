import express from "express";
const router = express.Router();

import { getPermisions } from "../controllers/permissionsController.js";

/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: Operaciones relacionadas con permisos
 */

/**
 * @swagger
 *  /permisions:
 *   get:
 *     summary: Obtiene una lista de todos los permisos
 *     tags: [Permissions]
 */
router.get("/", getPermisions);

export default router;
