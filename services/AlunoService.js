const AlunoModel = require('../models/AlunoModel');

let alunos = [];
let currentId = 0;

class AlunoService {
  static add(data) {
    const aluno = new AlunoModel(currentId, data.nome, data.curso, data.IRA);
    alunos = alunos.concat([aluno]);
    currentId += 1;
    return aluno._id;
  }

  static list() {
    return alunos;
  }

  static update(_id, data) {
    const aluno = alunos.find((e) => e._id === _id);
    if (!aluno) {
      throw Error('Invalid id');
    }

    aluno.nome = data.nome;
    aluno.curso = data.curso;
    aluno.IRA = data.IRA;
  }

  static remove(_id) {
    const oldLen = alunos.length;
    alunos = alunos.filter((e) => e._id !== _id);
    if (alunos.length === oldLen) {
      throw Error('Invalid id');
    }
  }

  static retrieve(_id) {
    const aluno = alunos.find((e) => e._id === _id);
    if (!aluno) {
      throw Error('Invalid id');
    }

    return aluno;
  }
}

module.exports = AlunoService;
