import EstadisticasController from "../controllers/EstadisticasController.js";
import EstadisticasService from "../services/EstadisticasService.js";

const estadisticasService = new EstadisticasService();
const estadisticasController = new EstadisticasController(estadisticasService);



export default estadisticasController;