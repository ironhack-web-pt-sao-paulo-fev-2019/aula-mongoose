const PersonModel = require('../../model/Person/PersonModel');


const updatePerson = (request, response) => {

    const personId= request.body;

    PersonModel.findByIdAndUpdate(personId.id,personId)
     .then(data =>{
     response.redirect('/person/read');
    }).catch(error =>{
     console.log(error);
   })
    
}

module.exports = updatePerson;