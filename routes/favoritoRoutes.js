import { Router } from "express";
import favoritoController from "../containers/favoritoContainer.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const favoritoRoutes = Router();

favoritoRoutes.get("/:usuarioId", favoritoController.getFavoritosByUsuario);
favoritoRoutes.post("/", authMiddleware, favoritoController.addFavorito);
favoritoRoutes.delete("/:usuarioId/:catalogoId", authMiddleware, favoritoController.deleteFavorito);

export default favoritoRoutes;