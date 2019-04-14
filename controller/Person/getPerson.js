const PersonModel = require('../../model/Person/PersonModel');

const listPersonId = (request, response) => {

  const {personId} = request.params;
   
   console.log(personId)

    const persons = PersonModel.findById(personId)
    .then((data) => {
        
        response.render('formUpdate',{data})
    }
    )
    .catch((err) => {
        console.log(err)
    });
}


module.exports = listPersonId;