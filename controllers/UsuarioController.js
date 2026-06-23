class UsuarioController {
  constructor(service) {
    this.usuarioService = service;
  }

  getAllUsuarios = async (req, res, next) => {
    try {
      const usuarios = await this.usuarioService.getAllUsuarios();
      res.status(200).send({ success: true, message: usuarios });
    } catch (error) {
      next(error);
    }
  };

  getUsuarioById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.getUsuarioById(id);
      if (!usuario) return res.status(404).send({ success: false, message: "Usuario no encontrado" });
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      next(error);
    }
  };

  createUsuario = async (req, res, next) => {
    try {
      const { nombre, email, contraseña, rol } = req.body;
      if (!nombre) throw new Error("El nombre es requerido");
      if (!email) throw new Error("El email es requerido");
      if (!contraseña) throw new Error("La contraseña es requerida");
      const usuario = await this.usuarioService.createUsuario({ nombre, email, contraseña, rol });
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      next(error);
    }
  };

  updateUsuario = async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.updateUsuario(id, req.body);
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      next(error);
    }
  };

  deleteUsuario = async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.deleteUsuario(id);
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, contraseña } = req.body;
      if (!email) throw new Error("El email es requerido");
      if (!contraseña) throw new Error("La contraseña es requerida");

      const token = await this.usuarioService.login({ email, contraseña });
      console.log("Token generado:", token);

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000,
      });

      res.status(200).send({ success: true, message: "Login exitoso" });
    } catch (error) {
      next(error);
    }
  };

  me = async (req, res, next) => {
    try {
      const usuario = await this.usuarioService.me(req.usuario);
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req, res, next) => {
    try {
      res.clearCookie("token", { httpOnly: true });
      res.status(200).send({ success: true, message: "Logout exitoso" });
    } catch (error) {
      next(error);
    }
  };

}

export default UsuarioController;