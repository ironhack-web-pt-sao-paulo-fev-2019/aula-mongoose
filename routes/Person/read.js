const PersonModel = require('../../model/Person/PersonModel');

const persons = PersonModel.find()
  .then(data => {
    console.log(data);
  })
  .catch (error => {
    console.log(error)
  });

module.exports = persons;