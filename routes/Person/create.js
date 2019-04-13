const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request, response) => {
  const personDoc = {
    name: 'Marcelo',
    age: 32,
    gender: 'Masculino',
  };

  PersonModel.create(personDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar o documento: ${error}`);
    } else {
      console.log(`Salvamos o documento: ${personDoc}`);
    }
  });

  response.send('Persons created');
};

module.exports = createPerson;
