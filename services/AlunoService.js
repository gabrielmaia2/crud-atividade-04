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

  static update(id, data) {
    const aluno = alunos.find((e) => e.id === id);
    if (!aluno) {
      throw Error('Invalid id');
    }

    aluno.nome = data.nome;
    aluno.curso = data.curso;
    aluno.IRA = data.IRA;
  }

  static remove(id) {
    const oldLen = alunos.length;
    alunos = alunos.filter((e) => e.id !== id);
    if (alunos.length === oldLen) {
      throw Error('Invalid id');
    }
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
