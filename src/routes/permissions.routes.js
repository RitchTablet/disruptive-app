import express from "express";
const router = express.Router();

import {
  getPermissions,
  createPermission,
  updatePermission,
  deletePermission,
} from "../controllers/permissionsController.js";
import { authorize } from "../middlewares/authorize.js";

/**
 * @swagger
 * tags:
 *   name: Permission
 *   description: Operaciones relacionadas con permisos
 */

/**
 * @swagger
 * /permissions:
 *   get:
 *     summary: Obtiene una lista de todos los permisos
 *     tags: [Permission]
 */
router.get("/", authorize("admin", ["crear"]), getPermissions);

/**
 * @swagger
 * /permissions:
 *   post:
 *     summary: Crea un nuevo permiso
 *     tags: [Permission]
 */
router.post("/", authorize("admin", ["crear"]), createPermission);

/**
 * @swagger
 * /permissions/{id}:
 *   put:
 *     summary: Actualiza un permiso existente por ID
 *     tags: [Permission]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del permiso
 */
router.put("/:id", authorize("admin", ["crear"]), updatePermission);

/**
 * @swagger
 * /permissions/{id}:
 *   delete:
 *     summary: Elimina un permiso por ID
 *     tags: [Permission]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del permiso
 */
router.delete("/:id", authorize("admin", ["crear"]), deletePermission);

export default router;
