const PersonModel = require('../../model/Person/PersonModel');


const createPerson = (request,response,next) => {
   const personObject = request.body

    PersonModel.create(personObject, (err) => {
        if (err) {
            response.render('form',{err})   
        } else {

            response.redirect('/person/read');
           console.log(`Documento ${personObject} salvo!`)
        }
    })
    
}

module.exports = createPerson;

