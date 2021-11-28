class AlunoModel {
  constructor(id, nome, curso, IRA) {
    this.id = String(id);
    this.nome = String(nome);
    this.curso = String(curso);
    this.IRA = String(IRA);
  }
}

module.exports = AlunoModel;
