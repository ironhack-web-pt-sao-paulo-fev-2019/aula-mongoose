const PersonModel = require('../../model/Person/PersonModel');


const createPerson = (request,response) => {

   
   const personObject = request.body
    
    PersonModel.create(personObject, (err) => {
        if (err) {
            console.log(`Não deu certo, erro: ${err}`)
        } else {
            console.log(`Documento ${personObject} salvo!`)
        }
    })

    response.redirect('/person/read')
}

module.exports = createPerson;

