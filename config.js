const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const dbName = 'aula-file-upload';

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('partialsDir', __dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(bodyParser.urlencoded({extended:true})) 

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