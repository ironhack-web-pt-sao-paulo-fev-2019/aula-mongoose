const express = require('express');

const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');

const dbName = 'marcelo-aula-mongoose';

mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

module.exports = {
  app,
  mongoose,
  hbs,
};
