const PersonModel = require('../../model/Person/PersonModel');
const updatePerson = (request, response) => {
  console.log(request);
  response.send(`Estou na rota de Update`)
}
module.exports = updatePerson