class RolService {
  constructor(rol) {
    this.rol = rol;
  }

  getAllRoles = async () => {
    const roles = await this.rol.findAll();
    return roles;
  };

  getRolById = async (id) => {
    const rol = await this.rol.findOne({ where: { id } });
    return rol;
  };

  createRol = async ({ nombre }) => {
    const rol = await this.rol.create({ nombre });
    return rol;
  };

  updateRol = async (id, { nombre }) => {
    const rol = await this.rol.findOne({ where: { id } });
    if (!rol) throw new Error("Rol no encontrado");
    await rol.update({ nombre });
    return rol;
  };

  deleteRol = async (id) => {
    const rol = await this.rol.findOne({ where: { id } });
    if (!rol) throw new Error("Rol no encontrado");
    await rol.destroy();
    return rol;
  };
}

export default RolService;