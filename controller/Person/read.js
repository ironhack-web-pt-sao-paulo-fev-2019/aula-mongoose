const PersonModel = require('../../model/Person/PersonModel');

const readPerson = (request, response) => {
  const allPersons = PersonModel.find()
  .then(data => {
    console.log(data);
    response.render('persons', { data });
  })
  .catch (error => {
    console.log(error)
  });
};

module.exports = readPerson;
