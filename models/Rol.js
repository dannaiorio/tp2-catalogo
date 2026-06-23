import {DataTypes, Model} from "sequelize";
import sequelize from "../connection/sequelize.js";

class Rol extends Model{}

Rol.init(
    {
        nombre:{
            type:DataTypes.STRING(50),
            allowNull:false,
            unique: true,
            validate: {
                is: {
                    args: /^[A-Za-z0-9\s]+$/i,
                    msg: "El nombre del rol solo puede contener letras, números y espacios"
                },
                notEmpty: { msg: "El nombre del rol no puede estar vacío" },
                len: {
                    args: [3, 50],
                    msg: "El nombre del rol debe tener entre 3 y 50 caracteres"
                }
            },
        },
    },

    {
        sequelize,
        modelName:"Rol",
    }
);

export default Rol