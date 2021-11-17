const AlunoModel = require('../models/AlunoModel');

let alunos = [];
let currentId = 0;

class AlunoService {
  static add(data) {
    const aluno = new AlunoModel(currentId, data.nome, data.curso, data.IRA);
    alunos = alunos.concat([aluno]);
    currentId += 1;
    return aluno.id;
  }

  static list() {
    return alunos;
  }

  static retrieve(id) {
    const aluno = alunos.find((e) => e.id === id);
    if (!aluno) {
      throw Error('Invalid id');
    }

    return aluno;
  }
}

module.exports = AlunoService;
