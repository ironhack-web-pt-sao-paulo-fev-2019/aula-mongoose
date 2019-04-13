const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PersonModel = require('./model/Person/PersonModel');
const createPerson = require('./model/routes/Person/create')
const dbName = 'aula-mongoose'

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {

if(error){
   console.log('erro ao conectar');
}else{
   console.log(`conectado em ${dbName}`)
}
});

//Passo 5  encontrando um registro no bando de dados

// Passo 6 Criando rotas

app.get('/',(request,response) => {
    response.send('minha primeira rota')    
})

app.get('/person/create',createPerson)

app.get('/person/read',(request,response) =>{

    response.send("estou na leitura");
    
})

app.listen(3000)