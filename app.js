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
  name: { type: String, unique: true },
  age: Number,
  gender: String,
}));

// passo 3 - configurando um documento 
const personDoc = {
  name: 'Marcelo',
  age: 32,
  gender: 'Masculino',
};

// passo 4 - criando um documento
PersonModel.create(personDoc, (error) => {
  if (error) {
    console.log(`Erro ao criar o documento: ${error}`);
  } else {
    console.log(`Salvamos o documento: ${personDoc}`);
  }
});

// passo 5 - procurando pelos documentos
const persons = PersonModel.find()
  .then(data => {
    console.log(data);
  })
  .catch (error => {
    console.log(error)
  });
