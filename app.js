const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// ou const {Schema} = mongoose.Schema

// passo 1 - conectamos ao banco de dados
const dbName = 'marcelo-aula-mongoose';

mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

// passo 2 - configurar o model
const PersonModel = mongoose.model('Person', new Schema({
  name: String,
  age: Number,
  gender: String,
}));
