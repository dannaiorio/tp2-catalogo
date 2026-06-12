class RolController {
  constructor(service) {
    this.rolService = service;
  }

  getAllRoles = async (req, res) => {
    try {
      const roles = await this.rolService.getAllRoles();
      res.status(200).send({ success: true, message: roles });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getRolById = async (req, res) => {
    try {
      const { id } = req.params;
      const rol = await this.rolService.getRolById(id);
      if (!rol) return res.status(404).send({ success: false, message: "Rol no encontrado" });
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createRol = async (req, res) => {
    try {
      const { nombre } = req.body;
      if (!nombre) throw new Error("El nombre es requerido");
      const rol = await this.rolService.createRol({ nombre });
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateRol = async (req, res) => {
    try {
      const { id } = req.params;
      const rol = await this.rolService.updateRol(id, req.body);
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRol = async (req, res) => {
    try {
      const { id } = req.params;
      const rol = await this.rolService.deleteRol(id);
      res.status(200).send({ success: true, message: rol });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RolController;