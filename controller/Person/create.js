const PersonModel = require('../../model/Person/PersonModel');
const createPerson = (request, response) => {
  const personDoc = {
    name: 'José Luiz',
    age: 19,
    gender: 'M'
  };
  
  PersonModel.create( personDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar documento ${error}`);
    } else {
      console.log(`Salvamos o documento: ${personDoc}`);
    }
  });
  
  response.send('Persons created');
};

module.exports = createPerson;