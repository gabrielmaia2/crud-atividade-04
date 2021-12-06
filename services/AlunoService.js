const AlunoModel = require('../models/AlunoModel');

class AlunoService {
  static add(data, res, err = () => {}) {
    const { nome, curso, IRA } = data;
    const aluno = { nome, curso, IRA };
    AlunoModel.create(aluno)
      .then((a) => res(a._id))
      .catch(err);
  }

  static list(res, err = () => {}) {
    AlunoModel.find()
      .then(res)
      .catch(err);
  }

  static update(_id, data, res, err = () => {}) {
    const { nome, curso, IRA } = data;
    const query = { $set: { nome, curso, IRA } };
    AlunoModel.findByIdAndUpdate(_id, query)
      .then((a) => res(a._id))
      .catch(err);
  }

}

module.exports = AlunoService;
