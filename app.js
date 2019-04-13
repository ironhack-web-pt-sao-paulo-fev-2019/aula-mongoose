const express = require('express');

const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// ou const {Schema} = mongoose.Schema

// passo 1 - conectamos ao banco de dados
const dbName = 'marcelo-aula-mongoose';

mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

// passo 2 - configurar o model
const PersonModel = require('./model/Person/PersonModel');

// passo 3 - configurando um documento

// passo 4 - criando um documento

// passo 5 - procurando pelos documentos
const persons = PersonModel.find()
  .then(data => {
    console.log(data);
  })
  .catch (error => {
    console.log(error)
  });

// passo 6 - criando rotas
// rota de home
app.get('/', (request, response) => {
  response.send('Minha primeira rota');
});

// rota pra criar
const createPerson = require('./routes/Person/create');

app.get('/person/create', createPerson);

app.get('/person/read', (request, response) => {
  response.send('Persons read');
});

app.listen(3000, 'localhost', (error) => {
  if (error) {
    console.log('Erro ao subir o servidor na porta 3000');
  } else {
    console.log('App rodando na porta 3000');
  }
});
