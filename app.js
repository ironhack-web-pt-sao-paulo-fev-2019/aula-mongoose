const mongoose = require("mongoose");
const dbName = "aula-mongoose";
const express = require('express');
const createPerson = require('./routes/Person/Create');
const PersonModel = require('./model/Person/PersonModel');
const app = express();


// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, error => {
  if (error) {
    console.log("Não consegui conectar");
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

app.get('/', (request, response) => {
  response.send('Minha Primeira Rota');
});

//Rota para Criar
app.get('/person/create', createPerson);

//Rota para Ler
app.get('/person/read', (request, response) => {
  response.send('Estou na rota de leitura');
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log('Deu ruim na conexao bro');
  } else {
    console.log('Romulando na porta 3000');
  }
});