const mongoose = require("mongoose");
const dbName = "aula-mongoose";
const express = require('express');

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

//Passo 2 - Configurar o model


//Passo 3 - Configurando um documento
const personDoc = {
  name: "Pablo Escobar",
  age: "40",
  gender: "M"
};

//Passo 4 - Criando um Documento
PersonModel.create(personDoc, error => {
  if (error) {
    console.log(`Erro ao criar documento ${error}`);
  } else {
    console.log(`Salvamos o documento: ${personDoc}`);
  }
});

//Passo 5 - realizando busca

const persons = PersonModel.find()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error)
  });

console.log(persons);

//Passo 6 - Criando rotas

app.get('/', (request, response) => {
  response.send('Minha Primeira Rota');
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log('Deu ruim na conexao bro');
  } else {
    console.log('Romulando na porta 3000');
  }
});