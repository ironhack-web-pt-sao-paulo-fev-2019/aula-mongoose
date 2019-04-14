
const { app } = require('../config');

const PersonModel = require('../model/Person/PersonModel');
const createPerson = require('../controller/Person/create');
const readPerson = require('../controller/Person/read');
const updatePerson = require('../controller/Person/update');
const deletePerson = require('../controller/Person/delete');
const listPersonId = require('../controller/Person/getPerson')

const HomeController = (request, response) => {
    response.render('form')
}

app.get('/', HomeController);

// C - Rota para criar
app.post('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', readPerson);

// U - Rota para atualizar
app.get('/person/getperson/:personId', listPersonId);
app.post('/person/update/', updatePerson);

// d - Rota para atualizar
app.get('/person/delete/:personId', deletePerson);

module.exports = app;

