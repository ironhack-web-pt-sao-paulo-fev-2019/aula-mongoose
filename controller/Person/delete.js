
const PersonModel = require('../../model/Person/PersonModel');

const deletePerson = (request, response) => {
    response.send('Estou na rota de DELETE')
}

module.exports = deletePerson;

