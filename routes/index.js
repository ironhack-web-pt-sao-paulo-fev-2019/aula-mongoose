const { app } = require('../config');

const PersonModel = require('../model/Person/PersonModel');
const createPerson = require('../controller/Person/create');
const readPerson = require('../controller/Person/read');
const updatePerson = require('../controller/Person/update');
const deletePerson = require('../controller/Person/delete');
const modifyPerson = require('../controller/Person/modify');


const HomeController = (request, response) => {
    response.render('index');
}

app.get('/', HomeController);

// C - Rota para criar
app.post('/person/create', createPerson);

// R - Rota para ler
app.get('/person/read', readPerson);

// U - Rota para atualizar
app.get('/person/update/:personId', updatePerson);

app.post('/person/update/:personId', modifyPerson);

// d - Rota para atualizar
app.get('/person/delete/:personId', deletePerson);

module.exports = app;