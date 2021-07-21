class Usuario {
  constructor(nome, email, competencias, profissao, senha) {
    this.nome = nome;
    this.email = email;
    this.competencias = competencias;
    this.profissao = profissao;
    this.senha = senha;
  }

  getUsuario() {
    return this;
  }

  updateUsuario(nome, email, competencias, profissao) {
    this.nome = nome;
    this.email = email;
    this.competencias = competencias;
    this.profissao = profissao;
  }

  
}

export default Usuario;