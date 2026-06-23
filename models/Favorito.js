import { DataTypes, Model} from "sequelize";
import sequelize from "../connection/sequelize.js";

class Favorito extends Model{}

Favorito.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          args: true,
          msg: "El usuarioId debe ser un número entero.",
        },
        min: {
          args: [1],
          msg: "El usuarioId debe ser un número entero positivo.",
        },
      },
    },
    catalogoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          args: true,
          msg: "El catalogoId debe ser un número entero.",
        },
        min: {
          args: [1],
          msg: "El catalogoId debe ser un número entero positivo.",
        },
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: "Favorito",
  }
);

export default Favorito;