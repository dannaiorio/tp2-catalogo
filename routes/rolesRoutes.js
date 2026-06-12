import { Router } from "express";
import rolController from "../containers/rolContainer.js";

const rolesRoutes = Router();

rolesRoutes.get("/", rolController.getAllRoles);
rolesRoutes.get("/:id", rolController.getRolById);
rolesRoutes.post("/", rolController.createRol);
rolesRoutes.put("/:id", rolController.updateRol);
rolesRoutes.delete("/:id", rolController.deleteRol);

export default rolesRoutes;