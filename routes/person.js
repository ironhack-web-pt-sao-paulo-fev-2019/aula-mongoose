const { app, hbs, bodyParser } = require('../config');

// rota pra criar
const createPerson = require('../controller/Person/create');

// app.get('/person/create', createPerson);
app.post('/person/create', createPerson);

// rota de leitura
const readPerson = require('../controller/Person/read');

app.get('/person/read', readPerson);

// rota de update
const updatePerson = require('../controller/Person/update');

app.get('/person/update/:personId', updatePerson);

// rota de deletar
const deletePerson = require('../controller/Person/delete');

app.get('/person/delete/:personId', deletePerson);

module.exports = app;
