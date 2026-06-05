class FavoritoController {
  constructor(service) {
    this.favoritoService = service;
  }

  getFavoritosByUsuario = async (req, res) => {
    try {
      const { usuarioId } = req.params;
      const favoritos = await this.favoritoService.getFavoritosByUsuario(usuarioId);
      res.status(200).send({ success: true, message: favoritos });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  addFavorito = async (req, res) => {
    try {
      const { usuarioId, catalogoId } = req.body;
      if (!usuarioId) throw new Error("El usuarioId es requerido");
      if (!catalogoId) throw new Error("El catalogoId es requerido");
      const favorito = await this.favoritoService.addFavorito({ usuarioId, catalogoId });
      res.status(201).send({ success: true, message: favorito });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteFavorito = async (req, res) => {
    try {
      const { usuarioId, catalogoId } = req.params;
      const favorito = await this.favoritoService.deleteFavorito({ usuarioId, catalogoId });
      res.status(200).send({ success: true, message: favorito });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default FavoritoController;