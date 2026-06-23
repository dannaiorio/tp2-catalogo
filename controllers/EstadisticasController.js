class EstadisticasController {
    constructor(service) {
        this.estadisticasService = service;
    }

  getEstadisticas = async (req, res, next) => {
    try {
      const topCatalogos = await this.estadisticasService.getTopCatalogos();
      const cantidadPorTipo = await this.estadisticasService.getCantidadPorTipo();
      const promedioPorGenero = await this.estadisticasService.getPromedioPorGenero();

      res.status(200).send({
        success: true,
        message: { topCatalogos, cantidadPorTipo,  promedioPorGenero, }
      });
    } catch (error) {
      next(error);
    }
  };

  exportarCSV = async (req, res, next) => {
    try {
       console.log("exportarCSV en service desde controller:", typeof this.estadisticasService.exportarCSV);
        const csv = await this.estadisticasService.exportarCSV();
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=estadisticas.csv");
        res.status(200).send(csv);
    } catch (error) {
        next(error);
    }
  };
}


export default EstadisticasController;



    