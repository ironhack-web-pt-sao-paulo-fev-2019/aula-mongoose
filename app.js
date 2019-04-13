const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PersonModel = require('./model/Person/PersonModel');
const createPerson = require('./routes/Person/create')
const readPerson = require('./routes/Person/read')
const dbName = 'aula-mongoose'

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {

if(error){
   console.log('erro ao conectar');
}else{
   console.log(`conectado em ${dbName}`)
}
});

app.get('/',(request,response) => {
    response.send('minha primeira rota')    
})
app.get('/person/create',createPerson)

app.get('/person/read',readPerson)

app.listen(3000)