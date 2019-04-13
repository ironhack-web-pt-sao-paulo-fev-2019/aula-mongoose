const PersonModel = require('../../model/Person/PersonModel');

const readPerson = (request, response) => {
    const persons = PersonModel.find()
    .then(data => 
        response.render('read', {data}))
    .catch(err => console.log(err));
}

module.exports = readPerson;