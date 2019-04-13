const PersonModel = require('../../model/Person/PersonModel');

const updatePerson = (request, response) => {
  response.send('Estou na rota de update');
}

module.exports = updatePerson;