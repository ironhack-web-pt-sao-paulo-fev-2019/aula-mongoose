const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'aula-mongoose';
const PersonModel = require('./model/Person/PersonModel');


// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

// Passo 2 - Configurar Model


// Passo 3 - Configurando um documento
const personDoc = {
  name: 'José Luiz',
  age: 19,
  gender: 'M'
};

// Passo 4 - Criando documento
PersonModel.create( personDoc, (error) => {
  if (error) {
    console.log(`Erro ao criar documento ${error}`);
  } else {
    console.log(`Salvamos o documento: ${personDoc}`);
  }
});

// Passo 5 - Consultando dados do banco
const persons = PersonModel.find()
  .then(personsData => {
    console.log(personsData);
  })
  .catch( error => {
    console.log(error);
  });


// Passo 6 - Criando rotas
app.get('/', (request, response) => {
  response.send('Minha primeira rota');
});

app.listen(3000, 'localhost', (error) => {
  if (error) {
    console.log('Erro ao subir o servidor na porta 3000');
  } else {
    console.log('App rodando na porta 3000');
  }
});

