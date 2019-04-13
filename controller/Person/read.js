const PersonModel = require('../../model/Person/PersonModel');

const readPerson = (request, response) => {
    const persons = PersonModel.find()
    .then(data => 
        response.send(JSON.stringify(data)))
    .catch(err => console.log(err));
}

module.exports = readPerson;