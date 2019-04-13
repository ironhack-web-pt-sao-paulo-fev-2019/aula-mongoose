const { app } = require('../config');
const createPerson = require('../controller/Person/Create');
const readPerson = require('../controller/Person/Read');
const updatePerson = require('../controller/Person/Update');
const deletePerson = require('../controller/Person/Delete');

app.get('/', (request, response) => {
  response.send('Minha Primeira Rota');
});

//Rota para Criar
app.get('/person/create', createPerson);

//Rota para Ler
app.get('/person/read', readPerson);

//Rota para Update
app.get('/person/update/:personId', updatePerson);

//Rota para Deletar
app.get('/person/delete/:personId', deletePerson);







module.exports = app;