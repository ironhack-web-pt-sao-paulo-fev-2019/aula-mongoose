const PersonModel = require ('../../model/Person/PersonModel');

const readPerson = (request, response) => {

const persons = PersonModel.find()
.then(personsData => {
    response.send(JSON.stringify(personsData));
})
.catch (error => {
    console.log(error);
});

}

module.exports = readPerson;