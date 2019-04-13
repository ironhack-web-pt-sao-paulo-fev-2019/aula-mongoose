const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbName = 'paul-aula-mongoose';
const PersonModel = require ('./model/Person/PersonModel');


// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Nao consegui conectar');
    } else {
        console.log (`CONECTAMOS EM ${dbName}`);
    }
});

// Passo 2 - Configuramos o model da collection Person

// Passo 3 - Configurando um documento

const PersonDoc = {
    name: 'Paul',
    age: 18,
    gender: 'Male'
}

// Passo 4 - Criando um documento

PersonModel.create(PersonDoc, (error) => {
    if (error) {
        console.log(`Erro ao criar documento ${error}`);
    } else {
        console.log(`Salvamos o documento: ${PersonDoc}`);
    }
});

//Passo 5 - Consultamos dados do banco
const persons = PersonModel.find()
.then(personsData => {
    console.log(personsData);
})
.catch (error => {
    console.log(error);
});

//Passo 6 - Criando rotas
app.get('/', (request, response) => {
    response.send('Minha primeira rota');
});

app.listen(3000, 'localhost', (error) => {
    if (error) {
        console.log('Erro ao subir o servidor na porta 3000');
    } else {
    console.log('App rodando na porta 3000');
    }
});