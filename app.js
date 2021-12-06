const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('./db/mongodb');

const AlunoRoutes = require('./routes/AlunoRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/alunos', AlunoRoutes);

module.exports = app;
