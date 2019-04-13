const mongoose = require('mongoose');

const dbName = 'paul-aula-mongoose';

// Passo 1 - Conectamos ao banco de dados
mongoose.connect(`mongodb://192.168.0.26/${dbName}`, (error) => {
    if (error) {
        console.log('Nao consegui conectar');
    } else {
        console.log (`CONECTAMOS EM ${dbName}`);
    }
});

