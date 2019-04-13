const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbName = 'aula-mongoose'

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {

if(error){
   console.log('erro ao conectar');
}else{
   console.log(`conectado em ${dbName}`)
}

});

// Passo 2 - configurar model


const PersonModel = mongoose.model('Person', new Schema({

    name:String,
    age:String,
    gender:String

}))



