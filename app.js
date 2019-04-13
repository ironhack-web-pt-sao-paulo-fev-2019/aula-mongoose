const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');

const PersonModel = require('./model/Person/PersonModel');
const createPerson = require('./routes/Person/create');
const readPerson = require('./routes/Person/read');
const updatePerson = require('./routes/Person/update');
const deletePerson = require('./routes/Person/delete');


const dbName = 'aula-mongoose';

mongoose.connect(`mongodb://localhost/${dbName}`, (err) => {
    if (err) {
        console.log('Deu erro!')
    } else {
        console.log(`Conectamos no db: ${dbName}!`)
    }
})

// ROTAS

const HomeController = (request, response) => {
    response.send('Minha rota')
}

app.get('/', HomeController);

// C - Rota para criar
app.get('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', readPerson);

// U - Rota para atualizar
app.get('/person/update/:personId', updatePerson);

// d - Rota para atualizar
app.get('/person/delete/:personId', deletePerson);

// Conectar Servidor
app.listen(3000, 'localhost', (err) => {
    err ? console.log(err) : console.log('Servidor conectado') 
});