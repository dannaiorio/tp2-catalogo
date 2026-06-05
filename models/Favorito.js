import { DataTypes, Model} from "sequelize";
import sequelize from "../connection/sequelize.js";

class Favorito extends Model{}

Favorito.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    catalogoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Favorito",
  }
);

export default Favorito;