import { Router } from "express";
import catalogoRoutes from "./catalogoRoutes.js";
import usuarioRoutes from "./usuarioRoutes.js";

const router = Router();

router.use("/catalogos", catalogoRoutes);
router.use("/usuarios", usuarioRoutes);

export default router;