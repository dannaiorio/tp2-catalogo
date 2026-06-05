import Catalogo from "./Catalogo.js";
import Usuario from "./Usuario.js";
import Favorito from "./Favortio.js";

Usuario.belongsToMany(Catalogo,{through:Favorito, foreignKey:"usuarioId"});
Catalogo.belongsToMany(Usuario,{through:Favorito, foreignKey:"catalogoId"});

export default Catalogo;
export { Catalogo, Usuario, Favorito };