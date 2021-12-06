const express = require('express');
const AlunoService = require('../services/AlunoService');

const AlunoRoutes = express.Router();

AlunoRoutes.get('/get/:id', (req, res) => {
  const { id } = req.params;

  AlunoService.retrieve(
    id,
    (aluno) => res.json(aluno),
    (err) => res.status(500).json(err)
  );
});

AlunoRoutes.get('/getall', (_req, res) => {
  AlunoService.list(
    (alunos) => res.json(alunos),
    (err) => res.status(500).json(err)
  );
});

AlunoRoutes.post('/post', (req, res) => {
  const { nome, curso, IRA } = req.body;
  const data = { nome, curso, IRA };

  AlunoService.add(
    data,
    (_id) => res.status(201).json(_id),
    (err) => res.status(500).json(err)
  );
});

AlunoRoutes.put('/put/:id', (req, res) => {
  const { nome, curso, IRA } = req.body;
  const data = { nome, curso, IRA };
  const { id } = req.params;

  AlunoService.update(
    id,
    data,
    (_id) => res.status(201).json(_id),
    (err) => res.status(500).json(err)
  );
});

AlunoRoutes.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  AlunoService.remove(
    id,
    (_id) => res.json(_id),
    (err) => res.status(500).json(err)
  );
});

module.exports = AlunoRoutes;
