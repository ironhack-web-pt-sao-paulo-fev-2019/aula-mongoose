const PersonModel = require('../../model/Person/PersonModel');

const readPerson = (request, response) => {
  PersonModel.find()
  .then(personsData => {
    console.log(personsData);
    response.render('person/read', {personsData});
  })
  .catch( error => {
    console.log(error);
  });
}

module.exports = readPerson;