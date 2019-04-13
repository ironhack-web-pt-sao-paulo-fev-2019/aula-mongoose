const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'aula-mongoose';
const PersonModel = require('./model/Person/PersonModel');
const createPerson = require('./routes/Person/create');
const readPerson = require('./routes/Person/read');

mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

app.get('/', (request, response) => {
  response.send('Minha primeira rota');
});

// C - Rota para criar
app.get('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', readPerson);


app.listen(3000, 'localhost', (error) => {
  if (error) {
    console.log('Erro ao subir o servidor na porta 3000');
  } else {
    console.log('App rodando na porta 3000');
  }
});

