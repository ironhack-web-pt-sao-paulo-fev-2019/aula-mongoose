const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'aula-mongoose';

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

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