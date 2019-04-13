const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'fred-aula-mongoose';
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


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
  hbs
};