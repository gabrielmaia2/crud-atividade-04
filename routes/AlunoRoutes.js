const express = require('express');
const AlunoService = require('../services/AlunoService');

const AlunoRoutes = express.Router();

AlunoRoutes.get('/get/:id', (req, res) => {
  try {
    const { id } = req.params;

    const aluno = AlunoService.retrieve(id);
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

    const id = AlunoService.add(data);
    res.json({ success: true, id });
  }
  catch (error) {
    res.json({ success: false });
  }
});

AlunoRoutes.put('/put/:id', (req, res) => {
  try {
    const { nome, curso, IRA } = req.body;
    const data = { nome, curso, IRA };
    const { id } = req.params;

    AlunoService.update(id, data);
    res.json(id);
  }
  catch (error) {
    res.json({ success: false });
  }
});

AlunoRoutes.delete('/delete/:id', (req, res) => {
  try {
    const { id } = req.params;

    AlunoService.remove(id);
    res.json(id);
  }
  catch (error) {
    res.json({ success: false });
  }
});

module.exports = AlunoRoutes;
