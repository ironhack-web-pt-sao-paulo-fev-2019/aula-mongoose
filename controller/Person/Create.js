const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request, response) => {
  const personDoc = request.body;
  console.log(personDoc);
  PersonModel.create(personDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar documento ${error}`);
    } else {
      console.log(`Salvamos o documento: ${personDoc}`);
    }
  });
  response.render('create2');
};
module.exports = createPerson;