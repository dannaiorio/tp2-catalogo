import { Router } from "express";
import usuarioController from "../containers/usuarioContainer.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const usuarioRoutes = Router();

//  públicas
usuarioRoutes.post("/login", usuarioController.login);
usuarioRoutes.post("/", usuarioController.createUsuario);

//  privadas
usuarioRoutes.get("/", authMiddleware, usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id", authMiddleware, usuarioController.getUsuarioById);
usuarioRoutes.put("/:id", authMiddleware, usuarioController.updateUsuario);
usuarioRoutes.delete("/:id", authMiddleware, usuarioController.deleteUsuario);

export default usuarioRoutes;