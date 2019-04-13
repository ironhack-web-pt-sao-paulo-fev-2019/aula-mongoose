const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const dbName = 'fred-aula-mongoose';

//Porta - Listen
app.listen((3000), 'localhost', (error) => {
    if(error) {
        console.log("Deu ruim para conexão")
    } else{
        console.log("App rodando lisamente na porta 3000");
    }
});


mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Está dando pau!');
    } else {
        console.log(`Conectamos em ${dbName}!Talquei!`)
    }
});


module.exports = {
    app,
    mongoose
};