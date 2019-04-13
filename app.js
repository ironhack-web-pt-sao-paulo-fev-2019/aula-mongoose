const express = require('express');
const app = express();

const hbs = require('hbs');
const mongoose = require('mongoose');

const PersonModel = require('./model/Person/PersonModel');

const dbName = 'aula-mongoose';

// Passo 1 - conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (err) => {
    if (err) {
        console.log('Deu erro!')
    } else {
        console.log(`Conectamos em ${dbName}!`)
    }
})

// Passo 2 - configurar Model


// Passo 3 - Configurando um documento
const personDoc = {
    name: 'Sany Chernizon',
    age: 27,
    gender: 'M'
}

// Passo 4 - Criando um documento
PersonModel.create(personDoc, (err) => {
    if (err) {
        console.log(`Não deu certo, erro: ${err}`)
    } else {
        console.log(`Documento ${personDoc} salvo!`)
    }
})

// Passo 5 - Consultando
const persons = PersonModel.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Passo 6 - rotas
const HomeController = (request, response) => {
    response.send('Minha rota')
}
app.get('/', HomeController);

app.listen(3000, 'localhost', (err) => {
    err ? console.log(err) : console.log('Conectado') 
});