const express = require('express');

const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dbName = 'marcelo-aula-mongoose';

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.urlencoded({ extended: false }))

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
  bodyParser,
};
