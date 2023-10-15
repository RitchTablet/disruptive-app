import express from "express";
const router = express.Router();

import { getEcho } from "../controllers/echoController.js";
import { authorize } from "../middlewares/authorize.js";

/**
 * @swagger
 * tags:
 *   name: Echo
 *   description: Operaciones relacionadas con echos test
 */

/**
 * @swagger
 * /echo:
 *   get:
 *     summary: Obtiene una lista de todos los echos
 *     tags: [Echo]
 */
router.get("/", authorize("admin", ["crear"]), getEcho);

export default router;
