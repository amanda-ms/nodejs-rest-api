class Tabelas {
  init(conection) {
    this.conection = conection;

    this.criarAtendimentos();
  }
  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id) )";
    this.conection.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Atendimento criada com sucesso.");
      }
    });
  }
}

module.exports = new Tabelas();
