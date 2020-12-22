
exports.notFound = (req, res, next) => {
 try{
  
  res.status(404).send("Pagina Não encontrada !!! ERRO-404");
  //res.send("Pagina Não encontrada !!! ERRO-404");
} catch (error) {
  res.status(404).send(error);
}
};


