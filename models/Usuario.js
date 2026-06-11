import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";
import bcrypt from "bcrypt";

class Usuario extends Model{
    static validatePassword = async (passwordPlain, passwordHash) => {
        const isValid = await bcrypt.compare(passwordPlain, passwordHash);
        return isValid;
    }
}

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
            allowNull: false,
        },

    },
    {
        sequelize:sequelize,
        modelName:"Usuario",
    }

);


Usuario.beforeCreate(async (usuario) => {
    const salt = await bcrypt.genSalt(10); //numero de veces que hashea el string, mas alto mas consume
    const hash = await bcrypt.hash(usuario.contraseña, salt);
    usuario.contraseña = hash;
});

export default Usuario