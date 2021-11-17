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

module.exports = AlunoRoutes;
