const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request, response) => {
  const personDoc = {
    name: 'Pablo Escobar',
    age: '40',
    gender: 'M'
  };
  PersonModel.create(personDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar documento ${error}`);
    } else {
      console.log(`Salvamos o documento: ${personDoc}`);
    }
  });
  response.send('Energumeno Criado');
};
module.exports = createPerson;