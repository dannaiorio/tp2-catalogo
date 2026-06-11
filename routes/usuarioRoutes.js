import { Router } from "express";
import usuarioController from "../containers/usuarioContainer.js";

const usuarioRoutes = Router();

usuarioRoutes.get("/", usuarioController.getAllUsuarios);
usuarioRoutes.get("/:id", usuarioController.getUsuarioById);
usuarioRoutes.post("/login", usuarioController.login);
usuarioRoutes.post("/", usuarioController.createUsuario);
usuarioRoutes.put("/:id", usuarioController.updateUsuario);
usuarioRoutes.delete("/:id", usuarioController.deleteUsuario);

export default usuarioRoutes;