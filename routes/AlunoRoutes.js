const express = require('express');
const AlunoService = require('../services/AlunoService');

const AlunoRoutes = express.Router();

AlunoRoutes.get('/getall', (_req, res) => {
  AlunoService.list(
    (alunos) => res.json({ success: true, alunos }),
    () => res.json({ success: false })
  );
});

AlunoRoutes.post('/post', (req, res) => {
  const { nome, curso, IRA } = req.body;
  const data = { nome, curso, IRA };

  AlunoService.add(
    data,
    (_id) => res.json({ success: true, _id }),
    () => res.json({ success: false })
  );
});

AlunoRoutes.put('/put/:id', (req, res) => {
  const { nome, curso, IRA } = req.body;
  const data = { nome, curso, IRA };
  const { id } = req.params;

  AlunoService.update(
    id,
    data,
    (_id) => res.json({ success: true, _id }),
    () => res.json({ success: false })
  );
});

AlunoRoutes.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  AlunoService.remove(
    id,
    (_id) => res.json({ success: true, _id }),
    () => res.json({ success: false })
  );
});

module.exports = AlunoRoutes;
