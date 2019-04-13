const PersonModel = require ('../../model/Person/PersonModel');

const persons = PersonModel.find()
.then(personsData => {
    console.log(personsData);
})
.catch (error => {
    console.log(error);
});

module.exports = persons;