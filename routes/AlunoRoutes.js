const express = require('express');
const AlunoService = require('../services/AlunoService');

const AlunoRoutes = express.Router();

AlunoRoutes.get('/get/:_id', (req, res) => {
  try {
    const { _id } = req.params;

    const aluno = AlunoService.retrieve(_id);
    res.json({ success: true, aluno });
  }
  catch (error) {
    res.json({ success: false });
  }
});

AlunoRoutes.get('/getall', (_req, res) => {
  try {
    const alunos = AlunoService.list();
    res.json({ success: true, alunos });
  }
  catch (error) {
    res.json({ success: false });
  }
});

AlunoRoutes.post('/post', (req, res) => {
  try {
    const { nome, curso, IRA } = req.body;
    const data = { nome, curso, IRA };

    const _id = AlunoService.add(data);
    res.json({ success: true, _id });
  }
  catch (error) {
    res.json({ success: false });
  }
});

AlunoRoutes.put('/put/:_id', (req, res) => {
  try {
    const { nome, curso, IRA } = req.body;
    const data = { nome, curso, IRA };
    const { _id } = req.params;

    AlunoService.update(_id, data);
    res.json({ success: true, _id });
  }
  catch (error) {
    res.json({ success: false });
  }
});

AlunoRoutes.delete('/delete/:_id', (req, res) => {
  try {
    const { _id } = req.params;

    AlunoService.remove(_id);
    res.json({ success: true, _id });
  }
  catch (error) {
    res.json({ success: false });
  }
});

module.exports = AlunoRoutes;
