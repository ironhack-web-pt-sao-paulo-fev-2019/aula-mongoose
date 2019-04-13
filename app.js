const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const dbName = 'fred-aula-mongoose';
const Schema = mongoose.Schema;
const PersonModel = require('./model/Person/PersonModel')

//Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Está dando pau!');
    } else {
        console.log(`Conectamos em ${dbName}!Talquei!`)
    }
});

// Passo 2 - Configuramos o Model(o famoso 'M' do MCV)!
// Agora importamos ele, lá em cima.


// Passo 3 - Configurando um documento
const personDoc = {
    name:"Fred",
    age: 30,
    gender: 'M'
}

// Passo 4 - Criando um documento
PersonModel.create(personDoc, (error) => {
    if(error) {
        console.log(`Erro ao criar documento ${error}`);
    } else {
        console.log(`Salvamos o documento: ${personDoc}`);
    }
});

//Passo 5 - Consultando dados do banco
const persons = PersonModel.find()
    .then(personsData => {
        console.log(personsData);
    })
    .catch( error => {
        console.log(error);
    })

    //Passo 6 - Criando rotas

    app.get('/', (request, response) => {
        response.send('Minha primeira rota');
    });

    app.listen((3000), 'localhost', (error) => {
        if(error) {
            console.log("Deu ruim para conexão")
        } else{
            console.log("App rodando lisamente na porta 3000");
        }
    });