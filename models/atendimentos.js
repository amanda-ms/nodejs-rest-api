const conection = require("../infraestrutura/conection");

class Atendimento {
  adiciona(atendimento) {
    const sql = "INSERT INTO Atendimentos SET ? ";

    conection.query(sql, atendimento, (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Atendimento();
