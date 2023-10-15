import express from "express";
const router = express.Router();

import { authenticate } from "../middlewares/authenticate.js";

import EchoRoutes from "./echo.routes.js";
import UserRoutes from "./user.routes.js";
import AuthRoutes from "./auth.routes.js";
import RolesRoutes from "./roles.routes.js";
import PermissionsRoutes from "./permissions.routes.js";

router.use("/echo", authenticate, EchoRoutes);
router.use("/users", authenticate, UserRoutes);
router.use("/auth", authenticate, AuthRoutes);
router.use("/roles", authenticate, RolesRoutes);
router.use("/permissions", authenticate, PermissionsRoutes);

export default router;
