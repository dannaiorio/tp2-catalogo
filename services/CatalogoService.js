class CatalogoService {
  constructor(catalogo) {
    this.catalogo = catalogo;
  }

  getAllCatalogos = async ({ tipo, genero } = {}) => {
    const where = {};
    if (tipo) where.tipo = tipo;
    if (genero) where.genero = genero;

    const catalogos = await this.catalogo.findAll({ where });
    return catalogos;
  };

  getCatalogoById = async (id) => {
    const catalogo = await this.catalogo.findOne({ where: { id } });
    return catalogo;
  };

  createCatalogo = async ({ titulo, descripcion, año, puntuacion, genero, poster, tipo }) => {
    const catalogo = await this.catalogo.create({ titulo, descripcion, año, puntuacion, genero, poster, tipo });
    return catalogo;
  };

  updateCatalogo = async (id, { titulo, descripcion, año, puntuacion, genero, poster, tipo }) => {
    const catalogo = await this.catalogo.findOne({ where: { id } });
    if (!catalogo) throw new Error("Catalogo no encontrado");
    await catalogo.update({ titulo, descripcion, año, puntuacion, genero, poster, tipo });
    return catalogo;
  };

  deleteCatalogo = async (id) => {
    const catalogo = await this.catalogo.findOne({ where: { id } });
    if (!catalogo) throw new Error("Catalogo no encontrado");
    await catalogo.destroy();
    return catalogo;
  };

  getTop10 = async () => {
    const catalogos = await this.catalogo.findAll({
      order: [["puntuacion", "DESC"]],
      limit: 10,
    });
    return catalogos;
  };

  importar = async (data) => {
    const peliculas = data.peliculas.map((p) => ({ ...p, tipo: "pelicula" }));
    const series = data.series.map((s) => ({ ...s, tipo: "serie" }));
    const todos = [...peliculas, ...series];
    const resultado = await this.catalogo.bulkCreate(todos, { ignoreDuplicates: true });
    return resultado;
  };
}

export default CatalogoService;