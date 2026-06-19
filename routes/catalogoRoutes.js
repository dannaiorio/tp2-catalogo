import { Router } from "express";
import catalogoController from "../containers/catalogoContainer.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";

const catalogoRoutes = Router();

catalogoRoutes.get("/top10", catalogoController.getTop10);
catalogoRoutes.get("/importar", catalogoController.importar);
catalogoRoutes.get("/", catalogoController.getAllCatalogos);
catalogoRoutes.get("/:id", catalogoController.getCatalogoById);
catalogoRoutes.post("/", authMiddleware, isAdmin, catalogoController.createCatalogo);
catalogoRoutes.put("/:id", authMiddleware, isAdmin, catalogoController.updateCatalogo);
catalogoRoutes.delete("/:id", authMiddleware, isAdmin, catalogoController.deleteCatalogo);

export default catalogoRoutes;