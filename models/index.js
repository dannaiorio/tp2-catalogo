import Catalogo from "./Catalogo.js";
import Usuario from "./Usuario.js";
import Favorito from "./Favorito.js";
import Rol from "./Rol.js";

Usuario.belongsToMany(Catalogo,{through:Favorito, foreignKey:"usuarioId"});
Catalogo.belongsToMany(Usuario,{through:Favorito, foreignKey:"catalogoId"});

// asociaciones directas para estadísticas
Favorito.belongsTo(Catalogo, { foreignKey: "catalogoId" });
Favorito.belongsTo(Usuario, { foreignKey: "usuarioId" });

//asociacion rol con usuario
Usuario.belongsTo(Rol,{foreignKey:"rolId", as:"rol"});
Rol.hasMany(Usuario, {foreignKey:"rolId", as:"usuarios"});

export default Catalogo;
export { Catalogo, Usuario, Favorito, Rol };