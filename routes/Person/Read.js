const PersonModel = require('../../model/Person/PersonModel');
const readPerson = (request, response) => {
  const persons = PersonModel.find()
    .then((data) => {
      console.log(data);
      response.send(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = readPerson;