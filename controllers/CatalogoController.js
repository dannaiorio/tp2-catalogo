class CatalogoController {
  constructor(service) {
    this.catalogoService = service;
  }

  getAllCatalogos = async (req, res, next) => {
    try {
      const { tipo, genero } = req.query;
      const catalogos = await this.catalogoService.getAllCatalogos({ tipo, genero });
      res.status(200).send({ success: true, message: catalogos });
    } catch (error) {
      next(error);
     
    }
  };

  getCatalogoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const catalogo = await this.catalogoService.getCatalogoById(id);
      if (!catalogo) return res.status(404).send({ success: false, message: "Catalogo no encontrado" });
      res.status(200).send({ success: true, message: catalogo });
    } catch (error) {
      next(error);
    }
  };

  createCatalogo = async (req, res, next) => {
    try {
      const { titulo, descripcion, año, puntuacion, genero, poster, tipo } = req.body;
      if (!titulo) throw new Error("El titulo es requerido");
      if (!tipo) throw new Error("El tipo es requerido");
      const catalogo = await this.catalogoService.createCatalogo({ titulo, descripcion, año, puntuacion, genero, poster, tipo });
      res.status(201).send({ success: true, message: catalogo });
    } catch (error) {
      next(error);
    }
  };

  updateCatalogo = async (req, res, next) => {
    try {
      const { id } = req.params;
      const catalogo = await this.catalogoService.updateCatalogo(id, req.body);
      res.status(200).send({ success: true, message: catalogo });
    } catch (error) {
      next(error);
    }
  };

  deleteCatalogo = async (req, res, next) => {
    try {
      const { id } = req.params;
      const catalogo = await this.catalogoService.deleteCatalogo(id);
      res.status(200).send({ success: true, message: catalogo });
    } catch (error) {
      next(error);
    }
  };

  getTop10 = async (req, res, next) => {
    try {
      const catalogos = await this.catalogoService.getTop10();
      res.status(200).send({ success: true, message: catalogos });
    } catch (error) {
      next(error);
    }
  };

  importar = async (req, res, next) => {
    try {
      const response = await fetch("https://www.mockachino.com/99371521-7de7-47/catalogos");
      const data = await response.json();
      const resultado = await this.catalogoService.importar(data);
      res.status(200).send({ success: true, message: `${resultado.length} registros importados` });
    } catch (error) {
      next(error);
    }
  };

  exportarCSV = async (req, res, next) => {
    try {
        const csv = await this.catalogoService.exportarCSV();
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=catalogos.csv");
        res.status(200).send(csv);
    } catch (error) {
        next(error);
    }
};
}

export default CatalogoController;