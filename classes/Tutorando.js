import Usuario from './Usuario'

class Tutorando extends Usuario {
  constructor(nome, email, competencias, profissao, senha) {
    super(nome, email, competencias, profissao, senha);
    this.salasMatriculadas = undefined;
  }
}

export default Tutorando;