import { Router } from "express";
import usuarioController from "../containers/usuarioContainer.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js"

const usuarioRoutes = Router();

//  públicas
usuarioRoutes.post("/login", usuarioController.login);
usuarioRoutes.post("/", usuarioController.createUsuario);
usuarioRoutes.post("/logout", usuarioController.logout);

//  privadas
usuarioRoutes.get("/", authMiddleware, usuarioController.getAllUsuarios);
usuarioRoutes.get("/me", authMiddleware, usuarioController.me);
usuarioRoutes.get("/:id", authMiddleware, usuarioController.getUsuarioById);
usuarioRoutes.put("/:id", authMiddleware, usuarioController.updateUsuario);
usuarioRoutes.delete("/:id", authMiddleware, isAdmin, usuarioController.deleteUsuario);


export default usuarioRoutes;