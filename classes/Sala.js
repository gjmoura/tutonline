class Sala {
  constructor(nome, competencia, descricao, material) {
    this.nome = nome;
    this.competencia = competencia;
    this.descricao = descricao;
    this.materiais = [];
    this.materiais.push(material);
    this._membros = undefined;
  }

  getSala() {
    return this;
  }

  updateSala(nome, competencia, descricao, materiais) {
    this.nome = nome;
    this.competencia = competencia;
    this.descricao = descricao;
    this.materiais.push(materiais);
  }
  
  updateMateriais(material) {
    this.materiais.push(material);
  }
}

module.exports = Sala;