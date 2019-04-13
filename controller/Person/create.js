const PersonModel = require('../../model/Person/PersonModel');
const { bodyParser } = require('../../config');

const createPerson = (request, response) => {
  const personDoc = {
    name: request.body.name,
    age: request.body.age,
    gender: request.body.gender,
  };

  PersonModel.create(personDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar o documento: ${error}`);
    } else {
      console.log(`Salvamos o documento: ${personDoc}`);
    }
  });

  response.send('Person created');
};

module.exports = createPerson;
