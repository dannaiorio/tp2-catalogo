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
            validate: {
                notEmpty: {msg: "El nombre no puede estar vacío"},
                len: {args: [2, 100], msg: "El nombre debe tener entre 2 y 100 caracteres"},
                isAlpha: {msg: "El nombre solo puede contener letras"},
            },
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {msg: "El email no puede estar vacío"},
                isEmail: {msg: "El email debe ser válido"},
                
            },
        },
        contraseña:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: "La contraseña no puede estar vacía"},
                len: {args: [6, 30], msg: "La contraseña debe tener entre 6 y 30 caracteres"},
            }
        },
        rolId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate: {
                notEmpty: {msg: "El rol no puede estar vacío"},
                isInt: {msg: "El rol debe ser un número entero"},
            }
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