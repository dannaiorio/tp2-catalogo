export const notFound = (req, res) => {
  res.status(404).send({ success: false, message: "Ruta no encontrada" });
};