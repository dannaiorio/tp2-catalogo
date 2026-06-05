import UsuarioController from "../controllers/UsuarioController.js";
import { Usuario } from "../models/index.js";
import UsuarioService from "../services/UsuarioService.js";

const usuarioService = new UsuarioService(Usuario);
const usuarioController = new UsuarioController(usuarioService);

export default usuarioController;
