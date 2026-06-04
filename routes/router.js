import { Router } from "express";
import catalogoRoutes from "./catalogoRoutes.js";

const router = Router();

router.use("/catalogos", catalogoRoutes);

export default router;