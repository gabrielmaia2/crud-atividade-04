const mongoose = require('mongoose');

const mongodbUrl = 'mongodb://127.0.0.1:27017/crud_alunos';
mongoose.connect(mongodbUrl);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose connected to ${mongodbUrl}`);
});

db.on('disconnected', () => {
  console.log(`Mongoose disconnected from ${mongodbUrl}`);
});

db.on('error', (err) => {
  console.log(`An error ocurred: ${err}`);
});

module.exports = db;
