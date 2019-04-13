const mongoose = require('mongoose');
const dbName = 'aula-mongoose';
const Schema = mongoose.Schema;

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log('Não consegui conectar');
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

// Passo 2 - Configurar Model
const PersonModel = mongoose.model('Person', new Schema({
  name: { type: String,  index: { unique: true } },
  age: Number,
  gender: String
}));

// Passo 3 - Configurando um documento
const personDoc = {
  name: 'José Luiz',
  age: 19,
  gender: 'M'
};

// Passo 4 - Criando documento
PersonModel.create( personDoc, (error) => {
  if (error) {
    console.log(`Erro ao criar documento ${error}`);
  } else {
    console.log(`Salvamos o documento: ${personDoc}`);
  }
});

// Passo 5 - Consultando dados do banco
const persons = PersonModel.find()
  .then(personsData => {
    console.log(personsData);
  })
  .catch( error => {
    console.log(error);
  });

