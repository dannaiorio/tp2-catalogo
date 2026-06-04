import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Catalogo extends Model {}

Catalogo.init(
  {
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [2, 255],
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    año: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    puntuacion: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    tipo: {
      type: DataTypes.ENUM("pelicula", "serie"),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Catalogo",
  }
);

export default Catalogo;