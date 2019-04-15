const PersonModel = require('../../model/Person/PersonModel');

const deletePerson = (request, response) => {
  const { personId } = request.params;
  PersonModel.deleteOne({_id : personId})
    .then( (result) => {
      response.redirect('/person/read');
    })
    .catch( (error) => {
      response.redirect('/person/read');
    })
}

module.exports = deletePerson;