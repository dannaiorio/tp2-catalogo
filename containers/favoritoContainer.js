import FavoritoController from "../controllers/FavoritoController.js";
import {Favorito, Catalogo} from "../models/index.js";
import FavoritoService from "../services/FavoritoService.js";

const favoritoService = new FavoritoService(Favorito, Catalogo);
const favoritoController = new FavoritoController(favoritoService);

export default favoritoController;