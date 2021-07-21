class Sala {
  constructor(nome, competencia, descricao, materiais) {
    this.nome = nome;
    this.competencia = competencia;
    this.descricao = descricao;
    this.materiais = materiais;
    this.membros = undefined;
  }

  getSala() {
    return this;
  }

  updateSala(nome, competencia, descricao, materiais) {
    this.nome = nome;
    this.competencia = competencia;
    this.descricao = descricao;
    this.materiais = materiais;
  }
}

module.exports = Sala;