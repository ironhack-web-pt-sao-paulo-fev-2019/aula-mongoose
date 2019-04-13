const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbName = 'paul-aula-mongoose';

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Nao consegui conectar');
    } else {
        console.log (`CONECTAMOS EM ${dbName}`);
    }
});

// Passo 2 - Configuramos o model

const PersonModel = mongoose.model('Person', new Schema ( {
    name: String,
    age: Number,
    gender: String,
}));


