import { Router } from "express";
import favoritoController from "../containers/favoritoContainer.js";

const favoritoRoutes = Router();

favoritosRoutes.get("/:usuarioId", favoritoController.getFavoritosByUsuario);
favoritosRoutes.post("/", favoritoController.addFavorito);
favoritosRoutes.delete("/:usuarioId/:catalogoId", favoritoController.deleteFavorito); 

export default favoritoRoutes;