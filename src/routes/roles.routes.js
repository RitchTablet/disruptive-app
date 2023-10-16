import express from "express";
const router = express.Router();

import {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
} from "../controllers/rolesController.js";
import { authorize } from "../middlewares/authorize.js";

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
 *     summary: Obtiene una lista de roles
 *     tags: [Roles]
 */
router.get("/", getRoles);

/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Crea un nuevo rol
 *     tags: [Roles]
 */
router.post("/", authorize("admin", ["crear"]), createRole);

/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     summary: Actualiza un rol existente por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol
 */
router.put("/:id", authorize("admin", ["crear"]), updateRole);

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Elimina un rol por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol
 */
router.delete("/:id", authorize("admin", ["crear"]), deleteRole);

export default router;
