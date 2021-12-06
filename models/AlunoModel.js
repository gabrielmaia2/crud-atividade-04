class AlunoModel {
  constructor(_id, nome, curso, IRA) {
    this._id = String(_id);
    this.nome = String(nome);
    this.curso = String(curso);
    this.IRA = String(IRA);
  }
}

module.exports = AlunoModel;
