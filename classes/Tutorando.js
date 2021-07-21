const Usuario = require('./Usuario')

class Tutorando extends Usuario {
  constructor(nome, email, competencias, profissao, senha) {
    super(nome, email, competencias, profissao, senha);
    this.salasMatriculadas = undefined;
  }
}

module.exports = Tutorando;