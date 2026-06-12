import express from "express";
import router from "./routes/router.js";
import morgan from "morgan";
import { notFound } from "./middlewares/notFound.js";
import sequelize from "./connection/sequelize.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(router);

await sequelize.sync({ alter: false });

app.use(notFound);

app.listen(SERVER_PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${SERVER_PORT}`);
});