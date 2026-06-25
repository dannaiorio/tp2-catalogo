import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Catalogo extends Model {}

Catalogo.init(
  {
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len:{args: [2, 80], msg: "El título debe tener entre 2 y 80 caracteres"},
        notEmpty: { msg: "El título no puede estar vacío" },
        isAlphanumeric: { msg: "El título solo puede contener letras y números" },


      },
    },
    descripcion: {
  type: DataTypes.TEXT,
  allowNull: false,
  validate: {
    notEmpty: { msg: "La descripción no puede estar vacía" },
    is: {
      args: /^[a-zA-Z0-9\s]+$/, // letras, números Y espacios
      msg: "La descripción solo puede contener letras, números y espacios"
    },
    len: { args: [10, 1000], msg: "La descripción debe tener entre 10 y 1000 caracteres" }
  },

    },
    año: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: "El año debe ser un número entero" },
        min: { args: [1900], msg: "El año debe ser mayor o igual a 1900" },
        max: { args: [new Date().getFullYear()], msg: "El año no puede ser mayor al año actual" },
      },
    },
    puntuacion: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: { args: [0], msg: "La puntuación debe ser mayor o igual a 0" },
        max: { args: [10], msg: "La puntuación debe ser menor o igual a 10" },
      },
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "El género no puede estar vacío" },
        isAlpha: { msg: "El género solo puede contener letras" },
      },
    },
    poster: {
      type: DataTypes.STRING(500),
      allowNull: true,
      validate: {
        isUrl: { msg: "El poster debe ser una URL válida" },
      },
    },
    tipo: {
      type: DataTypes.ENUM("pelicula", "serie"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["pelicula", "serie"]],
          msg: "El tipo debe ser 'pelicula' o 'serie'",
        },
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: "Catalogo",
  }
);

export default Catalogo;