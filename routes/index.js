const { app } = require('../config');
const createPerson = require('../controller/Person/create');
const readPerson = require('../controller/Person/read');
const { updatePerson, doUpdatePerson } = require('../controller/Person/update');
const deletePerson = require('../controller/Person/delete');

app.get('/', (request, response) => {
  response.render('index');
});

// C - Rota para criar
app.post('/person/create', createPerson);
// app.get('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', readPerson);

// U - Rota para atualizar
app.get('/person/update/:personId', updatePerson );
app.post('/person/update/:personId', doUpdatePerson );

// D - Rota para apagar
app.get('/person/delete/:personId', deletePerson );

module.exports = app;