import express from "express";
import router from "./routes/router.js";
import morgan from "morgan";
import { notFound } from "./middlewares/notFound.js";
import sequelize from "./connection/sequelize.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(router);

// middleware de errores global
app.use((err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
        return res.status(400).json({ 
            success: false, 
            message: err.errors[0].message 
        });
    }
    if (err.name === "SequelizeUniqueConstraintError") {
        return res.status(400).json({ 
            success: false, 
            message: "Ya existe un registro con ese valor" 
        });
    }
    res.status(500).json({ success: false, message: err.message });
});

await sequelize.sync({ alter: false });

app.use(notFound);

app.listen(SERVER_PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${SERVER_PORT}`);
});