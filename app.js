const mongoose = require('mongoose');
const dbName = 'aula-mongoose';
const Schema = mongoose.Scheema;

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

//Passo 2 - Configurar o model
const PersonModel = mongoose.model('Person', new Schema ({
  name.String,
  age.String,
  gender.String
}))