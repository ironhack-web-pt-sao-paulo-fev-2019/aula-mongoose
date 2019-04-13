const dbName = 'aula-mongoose';
const mongoose = require('mongoose');
const hbs = require('hbs');
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const routes = require('./routes');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

module.exports = {
  mongoose,
  app,
};
