const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema({
  nome: { type: String, required: true, max: 200 },
  curso: { type: String, required: true, max: 120 },
  IRA: { type: Number, required: true }
});
const AlunoModel = mongoose.model('aluno', AlunoSchema);

module.exports = AlunoModel;
