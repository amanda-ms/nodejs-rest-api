module.exports = (app) => {
  app.get("/atendimentos", (req, res) => res.send("Você está em atendimentos"));
};
