import { Router } from "express";
import estadisticasController from "../containers/estadisticasContainer.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";

const estadisticasRoutes = Router();


estadisticasRoutes.get("/exportar", authMiddleware, isAdmin, estadisticasController.exportarCSV);
estadisticasRoutes.get("/", authMiddleware, isAdmin, estadisticasController.getEstadisticas);

export default estadisticasRoutes;