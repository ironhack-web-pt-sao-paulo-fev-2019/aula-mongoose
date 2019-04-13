const PersonModel = require('../../model/Person/PersonModel');

const persons = PersonModel.find()
    .then(data => console.log(data))
    .catch(err => console.log(err));

module.exports = persons;