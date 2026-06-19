import { Router } from "express";
import catalogoRoutes from "./catalogoRoutes.js";
import usuarioRoutes from "./usuarioRoutes.js";
import favoritoRoutes from "./favoritoRoutes.js";
import rolesRoutes from "./rolesRoutes.js";
import estadisticasRoutes from "./estadisticasRoutes.js";

const router = Router();

router.use("/catalogos", catalogoRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/favoritos", favoritoRoutes);
router.use("/roles", rolesRoutes);
router.use("/estadisticas", estadisticasRoutes);

export default router;