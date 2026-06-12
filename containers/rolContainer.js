import RolController from "../controllers/RolController.js";
import { Rol } from "../models/index.js";
import RolService from "../services/RolService.js";

const rolService = new RolService(Rol);
const rolController = new RolController(rolService);

export default rolController;