import Tutorando from './Tutorando';

class Tutor extends Tutorando {
  constructor(nome, email, competencias, profissao, senha) {
    super(nome, email, competencias, profissao, senha, this.salasMatriculadas);
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

export default Tutor;