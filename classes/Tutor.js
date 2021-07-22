const Tutorando = require('./Tutorando');
const Sala = require('./Sala');

class Tutor extends Tutorando {
  constructor(nome, email, competencias, profissao, senha) {
    super(nome, email, competencias, profissao, senha);
    this.salasCriadas = [];
    this.avaliacao = undefined;
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

}

module.exports = Tutor;