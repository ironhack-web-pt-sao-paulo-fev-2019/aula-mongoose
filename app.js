const express = require('express');
const app = express();
const mongoose = require('mongoose');
const createPerson = require('./controllers/Person/create');
const readPerson = require('./controllers/Person/read');
//const updatePerson = require('./routes/Person/update');
//const deletePerson = require('./routes/Person/delete');

const dbName = 'aula-mongoose'
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

app.get('/person/create',createPerson);
app.get('/person/read',readPerson);
//app.get('/person/update/:personid',updatePerson);
//app.get('/person/delete/:personId',deletePerson);

app.listen(3000)