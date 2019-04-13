const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PersonModel = require('./model/Person/PersonModel');
const dbName = 'aula-mongoose'

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {

if(error){
   console.log('erro ao conectar');
}else{
   console.log(`conectado em ${dbName}`)
}

});

// Pass 3 - criando um documento na collection
const personDoc = {

     name:'Wilkor',
     age:'12',
     genter:'M'
}

// Passo w - Criando um documento
PersonModel.create(personDoc,(error) =>{
    if(error){
        console.log(`Erro ao criar documento ${error} `)
    }else{
        console.log(`Salvamos o documento: ${personDoc}`)
    }
})

//Passo 5  encontrando um registro no bando de dados
const person =  PersonModel.find()
    .then(data =>{

        console.log(data);

    })
    .catch(error =>{

        console.log(error);
    })

// Passo 6 Criando rotas

app.get('/',(request,response) => {
    response.send('minha primeira rota')    
})

app.listen(3000)