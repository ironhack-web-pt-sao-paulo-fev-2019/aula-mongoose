const mongoose = require("mongoose");
const dbName = "aula-mongoose";
const Schema = mongoose.Schema;

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://localhost/${dbName}`, error => {
  if (error) {
    console.log("Não consegui conectar");
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

//Passo 2 - Configurar o model
const PersonModel = mongoose.model(
  "Person",
  new Schema({
    name: String,
    age: String,
    gender: String
  })
);

//Passo 3 - Configurando um documento
const personDoc = {
  name: "Pablo Escobar",
  age: "40",
  gender: "M"
};

//Passo 4 - Criando um Documento
PersonModel.create(personDoc, error => {
  if (error) {
    console.log(`Erro ao criar documento ${error}`);
  } else {
    console.log(`Salvamos o documento: ${personDoc}`);
  }
});

//Passo 5 - p

const persons = PersonModel.find()
.then(data => 
  {
    console.log(data);
  })
  .catch( error => { 
    console.log(error)
  });

console.log(persons);
