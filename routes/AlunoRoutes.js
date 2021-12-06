const express = require('express');
const AlunoService = require('../services/AlunoService');

const AlunoRoutes = express.Router();

AlunoRoutes.post('/post', (req, res) => {
  const { nome, curso, IRA } = req.body;
  const data = { nome, curso, IRA };

  AlunoService.add(
    data,
    (_id) => res.json({ success: true, _id }),
    () => res.json({ success: false })
  );
});

module.exports = AlunoRoutes;
