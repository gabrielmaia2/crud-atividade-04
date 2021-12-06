const AlunoModel = require('../models/AlunoModel');

class AlunoService {
  static add(data, res, err = () => {}) {
    const { nome, curso, IRA } = data;
    const aluno = { nome, curso, IRA };
    AlunoModel.create(aluno)
      .then((a) => res(a._id))
      .catch(err);
  }

}

module.exports = AlunoService;
