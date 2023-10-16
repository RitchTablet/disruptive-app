import express from "express";
const router = express.Router();

import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { authorize } from "../middlewares/authorize.js";

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Operaciones relacionadas con categorías
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Obtiene una lista de todas las categorías
 *     tags: [Category]
 */
router.get("/", authorize("admin", ["crear"]), getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Obtiene una sola categoría por ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 */
router.get("/:id", authorize("admin", ["crear"]), getCategory);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Crea una nueva categoría
 *     tags: [Category]
 */
router.post("/", authorize("admin", ["crear"]), createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Actualiza una categoría existente por ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 */
router.put("/:id", authorize("admin", ["crear"]), updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Elimina una categoría por ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 */
router.delete("/:id", authorize("admin", ["crear"]), deleteCategory);

export default router;
