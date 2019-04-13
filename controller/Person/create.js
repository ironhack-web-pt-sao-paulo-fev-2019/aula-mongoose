const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request, response) => {
  const personDoc = {
    name: request.body.name,
    age: request.body.age,
    gender: request.body.gender,
  };
  console.log(request.body);

  PersonModel.create(personDoc, (error) => {
    if (error) {
      console.log(`Erro ao criar o documento: ${error}`);
      response.render('criacaoerro');
    } else {
      console.log(`Salvamos o documento: ${personDoc}`);
      response.redirect('/person/read');
    }
  });
};

module.exports = createPerson;
