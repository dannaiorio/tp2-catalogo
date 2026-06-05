import { Router } from "express";
import catalogoController from "../containers/catalogoContainer.js";

const catalogoRoutes = Router();

catalogoRoutes.get("/top10", catalogoController.getTop10);
catalogoRoutes.get("/importar", catalogoController.importar);
catalogoRoutes.get("/", catalogoController.getAllCatalogos);
catalogoRoutes.get("/:id", catalogoController.getCatalogoById);
catalogoRoutes.post("/", catalogoController.createCatalogo);
catalogoRoutes.put("/:id", catalogoController.updateCatalogo);
catalogoRoutes.delete("/:id", catalogoController.deleteCatalogo);

export default catalogoRoutes;