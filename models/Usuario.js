import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Usuario extends Model{}

Usuario.init(
    {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        contraseña:{
            type:DataTypes.STRING,
            allowNule: false,
        },

    },
    {
        sequelize:sequelize,
        modelName:"Usuario",
    }

);

export default Usuario