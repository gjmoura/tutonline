const Tutorando = require('./Tutorando');
const Sala = require('./Sala');

class Tutor extends Tutorando {
  constructor(nome, email, competencias, profissao, senha) {
    super(nome, email, competencias, profissao, senha);
    this.salasCriadas = [];
    this._avaliacoes = [4];
  }

  getTutor() {
    return this;
  }

  setSalasCriadas(nome, competencia, descricao, materiais) {
    const salaCriada = new Sala(nome, competencia, descricao, materiais);
    this.salasCriadas.push(salaCriada);
  }

  updateSalasCriadas(Sala) {
    
  }

  getSalasCriadas() {
    return this.salasCriadas;
  }

  setAvaliacao(avaliacao) {
    this._avaliacoes.push(avaliacao);
  }

  getAvaliacao() {
    console.log(this._avaliacoes)
    return  this._avaliacoes ? `${this._avaliacoes.reduce((acc, el) => acc + el)/this._avaliacoes.length} de 5` : "Nenhuma avaliação";
  }

}

module.exports = Tutor;