class CatalogoController {
  constructor(service) {
    this.catalogoService = service;
  }

  getAllCatalogos = async (req, res) => {
    try {
      const { tipo, genero } = req.query;
      const catalogos = await this.catalogoService.getAllCatalogos({ tipo, genero });
      res.status(200).send({ success: true, message: catalogos });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getCatalogoById = async (req, res) => {
    try {
      const { id } = req.params;
      const catalogo = await this.catalogoService.getCatalogoById(id);
      if (!catalogo) return res.status(404).send({ success: false, message: "Catalogo no encontrado" });
      res.status(200).send({ success: true, message: catalogo });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createCatalogo = async (req, res) => {
    try {
      const { titulo, descripcion, año, puntuacion, genero, poster, tipo } = req.body;
      if (!titulo) throw new Error("El titulo es requerido");
      if (!tipo) throw new Error("El tipo es requerido");
      const catalogo = await this.catalogoService.createCatalogo({ titulo, descripcion, año, puntuacion, genero, poster, tipo });
      res.status(201).send({ success: true, message: catalogo });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateCatalogo = async (req, res) => {
    try {
      const { id } = req.params;
      const catalogo = await this.catalogoService.updateCatalogo(id, req.body);
      res.status(200).send({ success: true, message: catalogo });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteCatalogo = async (req, res) => {
    try {
      const { id } = req.params;
      const catalogo = await this.catalogoService.deleteCatalogo(id);
      res.status(200).send({ success: true, message: catalogo });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getTop10 = async (req, res) => {
    try {
      const catalogos = await this.catalogoService.getTop10();
      res.status(200).send({ success: true, message: catalogos });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  importar = async (req, res) => {
    try {
      const response = await fetch("https://www.mockachino.com/99371521-7de7-47/catalogos");
      const data = await response.json();
      const resultado = await this.catalogoService.importar(data);
      res.status(200).send({ success: true, message: `${resultado.length} registros importados` });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  exportarCSV = async (req, res) => {
    try {
        const csv = await this.catalogoService.exportarCSV();
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=catalogos.csv");
        res.status(200).send(csv);
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
};
}

export default CatalogoController;