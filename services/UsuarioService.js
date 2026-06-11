import { generateToken } from "../utils/jwt.js";

class UsuarioService {
  constructor(usuario) {
    this.usuario = usuario;
  }

  getAllUsuarios = async () => {
    const usuarios = await this.usuario.findAll({
      attributes: ["id", "nombre", "email"],
    });
    return usuarios;
  };

  getUsuarioById = async (id) => {
    const usuario = await this.usuario.findOne({
      where: { id },
      attributes: ["id", "nombre", "email"],
    });
    return usuario;
  };

  createUsuario = async ({ nombre, email, contraseña }) => {
    const usuario = await this.usuario.create({ nombre, email, contraseña });
    return usuario;
  };

  login = async ({ email, contraseña }) => {
    const usuario = await this.usuario.findOne({ where: { email },
      attributes: ["id", "nombre", "email", "contraseña"],
    });
    if (!usuario) throw new Error("Usuario no encontrado");
    const validatePassword = await this.usuario.validatePassword(contraseña, usuario.contraseña);
    if (!validatePassword) throw new Error("Contraseña incorrecta");

    const payload = { id: usuario.id, nombre: usuario.nombre };
    return generateToken(payload);
  };

  updateUsuario = async (id, { nombre, email, contraseña }) => {
    const usuario = await this.usuario.findOne({ where: { id } });
    if (!usuario) throw new Error("Usuario no encontrado");
    await usuario.update({ nombre, email, contraseña });
    return usuario;
  };

  deleteUsuario = async (id) => {
    const usuario = await this.usuario.findOne({ where: { id } });
    if (!usuario) throw new Error("Usuario no encontrado");
    await usuario.destroy();
    return usuario;
  };

} 

export default UsuarioService;