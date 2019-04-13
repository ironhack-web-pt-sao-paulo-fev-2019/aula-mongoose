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

//Passo 2 - configurar Model
const PersonModel = mongoose.model('Person', new Schema({
    name: String,
    age: Number,
    gender: String
}));