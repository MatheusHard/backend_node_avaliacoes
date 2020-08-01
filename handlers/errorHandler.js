
exports.notFound = (req, res, next) => {
  res.status = "404";
  res.send("Pagina Não encontrada 404");
};
