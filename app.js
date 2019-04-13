const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'paul-aula-mongoose';
const PersonModel = require ('./model/Person/PersonModel');
const createPerson = require ('./routes/Person/create');


// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Nao consegui conectar');
    } else {
        console.log (`CONECTAMOS EM ${dbName}`);
    }
});

// Passo 2 - Configuramos o model da collection Person

// Passo 3 - Configurando um documento

// Passo 4 - Criando um documento

//Passo 5 - Consultamos dados do banco

//Passo 6 - Criando rotas

// HOME
app.get('/', (request, response) => {
    response.send('Minha primeira rota');
});

// C - Rota para criar
app.get('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', (request, response) => {
    response.send('Estou na rota de leitura');
});


app.listen(3000, 'localhost', (error) => {
    if (error) {
        console.log('Erro ao subir o servidor na porta 3000');
    } else {
    console.log('App rodando na porta 3000');
    }
});