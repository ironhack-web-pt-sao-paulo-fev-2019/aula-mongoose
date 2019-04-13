const PersonModel = require('../../model/Person/PersonModel');


const readPerson = PersonModel.find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
module.exports = readPerson;