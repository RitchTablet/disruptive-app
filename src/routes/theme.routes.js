import express from "express";
const router = express.Router();

import {
  getThemes,
  getTheme,
  createTheme,
  updateTheme,
  deleteTheme,
} from "../controllers/themeController.js";
import { authorize } from "../middlewares/authorize.js";

/**
 * @swagger
 * tags:
 *   name: Theme
 *   description: Operaciones relacionadas con temas
 */

/**
 * @swagger
 * /themes:
 *   get:
 *     summary: Obtiene una lista de todos los temas
 *     tags: [Theme]
 */
router.get("/", authorize("admin", ["crear"]), getThemes);

/**
 * @swagger
 * /themes/{id}:
 *   get:
 *     summary: Obtiene un solo tema por ID
 *     tags: [Theme]
 */
router.get("/:id", authorize("admin", ["crear"]), getTheme);

/**
 * @swagger
 * /themes:
 *   post:
 *     summary: Crea un nuevo tema
 *     tags: [Theme]
 */
router.post("/", authorize("admin", ["crear"]), createTheme);

/**
 * @swagger
 * /themes/{id}:
 *   put:
 *     summary: Actualiza un tema por ID
 *     tags: [Theme]
 */
router.put("/:id", authorize("admin", ["crear"]), updateTheme);

/**
 * @swagger
 * /themes/{id}:
 *   delete:
 *     summary: Elimina un tema por ID
 *     tags: [Theme]
 */
router.delete("/:id", authorize("admin", ["crear"]), deleteTheme);

export default router;
