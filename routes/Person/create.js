const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request, response) => {
  response.send('Persons created');
};

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

module.exports = createPerson;
