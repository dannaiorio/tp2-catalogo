import { Router } from "express";
import catalogoRoutes from "./catalogoRoutes.js";
import usuarioRoutes from "./usuarioRoutes.js";
import favoritoRoutes from "./favoritoRoutes.js";

const router = Router();

router.use("/catalogos", catalogoRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/favoritos", favoritoRoutes);

export default router;