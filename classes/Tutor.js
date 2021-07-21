const Tutorando = require('./Tutorando');

class Tutor extends Tutorando {
  constructor(nome, email, competencias, profissao, senha) {
    super(nome, email, competencias, profissao, senha);
    this.salasCriadas = undefined;
    this.avaliacao = undefined;
  }

  getTutor() {
    return this;
  }

  setSalasCriadas() {

  }

  updateSalasCriadas(Sala) {

  }

  getSalasCriadas() {
    
  }

}

module.exports = Tutor;