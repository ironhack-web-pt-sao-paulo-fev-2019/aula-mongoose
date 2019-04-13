const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'paul-aula-mongoose';
const PersonModel = require ('./model/Person/PersonModel');
const createPerson = require ('./routes/Person/create');
const readPerson = require ('./routes/Person/read');
const updatePerson = require ('./routes/Person/update');
const deletePerson = require ('./routes/Person/delete');


// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Nao consegui conectar');
    } else {
        console.log (`CONECTAMOS EM ${dbName}`);
    }
});

// Rota para home
app.get('/', (request, response) => {
    response.send('Minha primeira rota');
});

// C - Rota para criar
app.get('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', readPerson);

// U - Rota para atualizar
app.get('/person/update/:personId', updatePerson);

// D - Rota para apagar
app.get('/person/delete/:personId', deletePerson);



app.listen(3000, 'localhost', (error) => {
    if (error) {
        console.log('Erro ao subir o servidor na porta 3000');
    } else {
    console.log('App rodando na porta 3000');
    }
});