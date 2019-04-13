const PersonModel = require('../../model/Person/PersonModel');

const deletePerson = (request, response) => {
  PersonModel.deleteOne({ _id: request.params.personId }, (erro) => {
    if (erro) {
      console.log(erro);
    } else {
      response.redirect('/person/read');
    }
  });
};

module.exports = deletePerson;
