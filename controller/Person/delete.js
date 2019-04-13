
const PersonModel = require('../../model/Person/PersonModel');

const deletePerson = (request, response,next) => {

    const {personId} = request.params

     console.log(personId)
    PersonModel.findByIdAndRemove(personId)

    .then(data =>{

       response.redirect('/person/read')

    })
    .catch(error =>{


    })
  
  
}

module.exports = deletePerson;

