class RolController {
  constructor(service) {
    this.rolService = service;
  }

  getAllRoles = async (req, res, next) => {
    try {
      const roles = await this.rolService.getAllRoles();
      res.status(200).send({ success: true, message: roles });
    } catch (error) {
      next(error);
    }
  };

  getRolById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await this.rolService.getRolById(id);
      if (!rol) return res.status(404).send({ success: false, message: "Rol no encontrado" });
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      next(error);
    }
  };

  createRol = async (req, res, next) => {
    try {
      const { nombre } = req.body;
      if (!nombre) throw new Error("El nombre es requerido");
      const rol = await this.rolService.createRol({ nombre });
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      next(error);
    }
  };

  updateRol = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await this.rolService.updateRol(id, req.body);
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      next(error);
    }
  };

  deleteRol = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await this.rolService.deleteRol(id);
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      next(error);
    }
  };
}

export default RolController;