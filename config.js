const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'aula-mongoose';

mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

module.exports = {
  app,
  mongoose,
}