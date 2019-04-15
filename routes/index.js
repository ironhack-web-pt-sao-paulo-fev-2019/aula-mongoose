const { app } = require('../config');
const createPerson = require('../controller/Person/Create');
const savePerson = require('../controller/Person/Save');
const updatePerson = require('../controller/Person/Update');
const deletePerson = require('../controller/Person/Delete');
const formCreate = require('../controller/form/FormCreate');
const formRead = require('../controller/form/FormRead');

app.get('/', (request, response) => {
  response.render('index');
});

//Rota para formulario
app.get('/create', formCreate);
app.post('/person/create', createPerson)

// //Rota para leitura
app.get('/read', formRead);

//Rota para Criar
app.get('/person/create', createPerson);

// //Rota para Ler
// app.get('/person/read', readPerson);

//Rota para Update
app.get('/person/update/:personId', updatePerson);
app.post('/person/save', savePerson);


//Rota para Deletar
app.get('/person/delete/:personId', deletePerson);

module.exports = app;