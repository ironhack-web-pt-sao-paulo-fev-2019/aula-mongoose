const PersonModel = require('../../model/Person/PersonModel');

const findPerson = (request, response) => {
  const findPerson = PersonModel.find({ _id: request.params.personId })
  .then(data => {
    console.log(data);
    response.render('atualiza-pessoa', data);
  })
  .catch(error => {
    console.log(error);
  });
};

const updatePerson = (request, response) => {
  console.log(request.body);
  PersonModel.updateOne({ _id: request.params.personId }, { name: request.body.name, age: request.body.age, gender: request.body.gender })
  .then(data => {
    response.redirect('/person/read');
  })
  .catch(error => {
    console.log(error);
  });
};

module.exports = {
  findPerson,
  updatePerson,
};
