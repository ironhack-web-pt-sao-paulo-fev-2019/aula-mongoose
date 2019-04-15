const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request, response) => {
  const personData = request.body;
  
  PersonModel.create( personData, (error) => {
    if (error) {
      console.log(`Erro ao criar documento ${error}`);
    } else {
      console.log(`Salvamos o documento: ${JSON.stringify(personData)}`);
    }
    response.render('person/created', { personData });
  });
};

module.exports = createPerson;