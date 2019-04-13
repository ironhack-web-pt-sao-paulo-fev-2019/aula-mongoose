const PersonModel = require ('../../model/Person/PersonModel');
const createPerson = (request, response) => {

const PersonDoc = {
    name: 'Paul',
    age: 18,
    gender: 'Male'
}

PersonModel.create(PersonDoc, (error) => {
    if (error) {
        console.log(`Erro ao criar documento ${error}`);
    } else {
        console.log(`Salvamos o documento: ${PersonDoc}`);
    }
});

response.send('Persons created');
};

module.exports = createPerson;