const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const PersonModel = mongoose.model('Person', new Schema({
    name: String,
    age: Number,
    gender: String
}));

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
