const express = require('express');
const hbs = require('hbs');
const mongoose = require ('mongoose');
const dbName = 'fred-aula-mongoose';

//Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Está dando pau!');
    } else {
        console.log(`Conectamos em ${dbName}!Talquei!`)
    }
});

