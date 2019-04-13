const mongoose = require('mongoose');
const dbName = 'aula-mongoose'

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {

if(error){
   console.log('erro ao conectar');
}else{
   console.log(`conectado em ${dbName}`)
}

});



