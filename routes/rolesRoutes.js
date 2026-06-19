import { Router } from "express";
import rolController from "../containers/rolContainer.js";
import authMiddleware from "../middlewares/authMiddleware.js"
import isAdmin from "../middlewares/isAdmin.js"

const rolesRoutes = Router();

rolesRoutes.get("/", rolController.getAllRoles);
rolesRoutes.get("/:id", rolController.getRolById);
rolesRoutes.post("/", authMiddleware, isAdmin, rolController.createRol);
rolesRoutes.put("/:id", authMiddleware, isAdmin, rolController.updateRol);
rolesRoutes.delete("/:id", authMiddleware, isAdmin, rolController.deleteRol);


export default rolesRoutes;