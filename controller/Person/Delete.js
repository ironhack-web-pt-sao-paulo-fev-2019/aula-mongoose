const PersonModel = require('../../model/Person/PersonModel');
const deletePerson = (request, response) => {
  let personId = request.params.personId;
  PersonModel.deleteOne({_id: personId})
  .then(() => {
    response.render('delete2');
  })
  .catch((error) => {
    console.log(error);
  });
}
module.exports = deletePerson;