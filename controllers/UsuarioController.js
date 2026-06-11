class UsuarioController {
  constructor(service) {
    this.usuarioService = service;
  }

  getAllUsuarios = async (req, res) => {
    try {
      const usuarios = await this.usuarioService.getAllUsuarios();
      res.status(200).send({ success: true, message: usuarios });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUsuarioById = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.getUsuarioById(id);
      if (!usuario) return res.status(404).send({ success: false, message: "Usuario no encontrado" });
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUsuario = async (req, res) => {
    try {
      const { nombre, email, contraseña } = req.body;
      if (!nombre) throw new Error("El nombre es requerido");
      if (!email) throw new Error("El email es requerido");
      if (!contraseña) throw new Error("La contraseña es requerida");
      const usuario = await this.usuarioService.createUsuario({ nombre, email, contraseña });
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.updateUsuario(id, req.body);
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await this.usuarioService.deleteUsuario(id);
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

 login = async (req, res) => {
    try {
      
      const {email, contraseña } = req.body;
      if (!email) throw new Error("El email es requerido");
      if (!contraseña) throw new Error("La contraseña es requerida");
      const usuario = await this.usuarioService.login({email, contraseña });
      res.status(200).send({ success: true, message: usuario });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

}

export default UsuarioController;