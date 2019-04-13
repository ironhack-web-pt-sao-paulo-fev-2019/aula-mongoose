const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request,response) => {
    const personDoc = {
        name: 'Sany Chernizon',
        age: 27,
        gender: 'M'
    }
    
    PersonModel.create(personDoc, (err) => {
        if (err) {
            console.log(`Não deu certo, erro: ${err}`)
        } else {
            console.log(`Documento ${personDoc} salvo!`)
        }
    })

    response.send('Create certo')
}

module.exports = createPerson;

