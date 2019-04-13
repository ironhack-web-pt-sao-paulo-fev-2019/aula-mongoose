const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'fred-aula-mongoose';

mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});


module.exports = {
    app,
    mongoose
};