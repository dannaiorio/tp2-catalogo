import CatalogoController from "../controllers/CatalogoController.js";
import Catalogo from "../models/Catalogo.js";
import CatalogoService from "../services/CatalogoService.js";

const catalogoService = new CatalogoService(Catalogo);
const catalogoController = new CatalogoController(catalogoService);

export default catalogoController;