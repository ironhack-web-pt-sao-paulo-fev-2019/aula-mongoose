const PersonModel = require('../../model/Person/PersonModel');

const updatePerson = (request, response) => {
  const { personId } = request.params;
  PersonModel.findById(personId)
    .then( personData => {
      response.render('person/update', { personData });
    });
}

const doUpdatePerson = (request, response) => {
  const { personId } = request.params;
  const person = request.body;
  console.log(person);
  PersonModel.findOneAndUpdate({_id: personId}, person)
    .then( personData => {
      response.redirect('/person/read');
    });
}


module.exports = {
  updatePerson,
  doUpdatePerson,
};