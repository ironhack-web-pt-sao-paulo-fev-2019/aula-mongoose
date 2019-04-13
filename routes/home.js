const { app } = require('../config');

//C - Rota para criar
app.get('/person/create', createPerson)

//R - Rota para ler
app.get('/person/read', readPerson);

//U
app.get('/person/update/:personId', updatePerson )

//D
app.get('/person/delete/:personId', deletePerson )