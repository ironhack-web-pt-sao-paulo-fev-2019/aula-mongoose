const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');

const PersonModel = require('./model/Person/PersonModel');
const createPerson = require('./routes/Person/create')

const dbName = 'aula-mongoose';

// Passo 1 - conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (err) => {
    if (err) {
        console.log('Deu erro!')
    } else {
        console.log(`Conectamos em ${dbName}!`)
    }
})

// Passo 5 - Consultando


// Passo 6 - Rotas

const HomeController = (request, response) => {
    response.send('Minha rota')
}

app.get('/', HomeController);

// C - Rota para criar
app.get('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', (request, response) => {
    response.send('estou na rota de leitura')
});

// Conectar Servidor
app.listen(3000, 'localhost', (err) => {
    err ? console.log(err) : console.log('Conectado') 
});