class FavoritoService {
  constructor(favorito, catalogo) {
    this.favorito = favorito;
    this.catalogo = catalogo;
  }

  getFavoritosByUsuario = async (usuarioId) => {
    const favoritos = await this.favorito.findAll({
      where: { usuarioId },
      include: [{ model: this.catalogo }],
    });
    return favoritos;
  };

  addFavorito = async ({ usuarioId, catalogoId }) => {
    const favoritoExistente = await this.favorito.findOne({
      where: { usuarioId, catalogoId },
    });
    if (favoritoExistente) throw new Error("Ya está en favoritos");
    const favorito = await this.favorito.create({ usuarioId, catalogoId });
    return favorito;
  };

  deleteFavorito = async ({ usuarioId, catalogoId }) => {
    const favorito = await this.favorito.findOne({
      where: { usuarioId, catalogoId },
    });
    if (!favorito) throw new Error("Favorito no encontrado");
    await favorito.destroy();
    return favorito;
  };
}

export default FavoritoService;