import sequelize from "../connection/sequelize.js";
import { Catalogo, Usuario, Favorito } from "../models/index.js";



class EstadisticasService {
  constructor() {
        
    }

 getTopCatalogos = async () => {
    const top = await Favorito.findAll({
      attributes: [
        "catalogoId",
        [sequelize.fn("COUNT", sequelize.col("catalogoId")), "totalFavoritos"]
      ],
      group: ["catalogoId"],
      order: [[sequelize.literal("totalFavoritos"), "DESC"]],
      limit: 10,
      include: [{ model: Catalogo, attributes: ["titulo", "tipo", "genero"] }]
    });
    return top;
  };


getCantidadPorTipo = async () => {
    const cantidad = await Catalogo.findAll({
      attributes: [
        "tipo",
        [sequelize.fn("COUNT", sequelize.col("tipo")), "total"]
      ],
      group: ["tipo"],
    });
    return cantidad;
  };



   getPromedioPorGenero = async () => {
    const promedio = await Catalogo.findAll({
      attributes: [
        "genero",
        [sequelize.fn("AVG", sequelize.col("puntuacion")), "promedioPuntuacion"]
      ],
      group: ["genero"],
      order: [[sequelize.literal("promedioPuntuacion"), "DESC"]],
    });
    return promedio;
  };




  exportarCSV = async () => {
    const top = await this.getTopCatalogos();
    const porTipo = await this.getCantidadPorTipo();
    const porGenero = await this.getPromedioPorGenero();

    let csv = "TOP 10 CATALOGOS MAS AGREGADOS A FAVORITOS\n";
    csv += "catalogoId,titulo,tipo,genero,totalFavoritos\n";
    top.forEach(t => {
        csv += `${t.catalogoId},"${t.Catalogo.titulo}","${t.Catalogo.tipo}","${t.Catalogo.genero}",${t.dataValues.totalFavoritos}\n`;
    });

    csv += "\nCANTIDAD POR TIPO\n";
    csv += "tipo,total\n";
    porTipo.forEach(t => {
        csv += `"${t.tipo}",${t.dataValues.total}\n`;
    });

    csv += "\nPROMEDIO DE PUNTUACION POR GENERO\n";
    csv += "genero,promedioPuntuacion\n";
    porGenero.forEach(t => {
        csv += `"${t.genero}",${t.dataValues.promedioPuntuacion}\n`;
    });

    return csv;
};



}

export default EstadisticasService;
