const customExpress = require("./config/customExpress");
const conection = require("./infraestrutura/conection");
const Tabelas = require("./infraestrutura/tabelas");

conection.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso!");

    Tabelas.init(conection);

    const app = customExpress();
    app.listen(3000, () => console.log("servidor rodando na porta 3000"));
  }
});
