import { Router } from "express";
import favoritoController from "../containers/favoritoContainer.js";

const favoritoRoutes = Router();

favoritoRoutes.get("/:usuarioId", favoritoController.getFavoritosByUsuario);
favoritoRoutes.post("/", favoritoController.addFavorito);
favoritoRoutes.delete("/:usuarioId/:catalogoId", favoritoController.deleteFavorito); 

export default favoritoRoutes;