const PersonModel = require('../../model/Person/PersonModel');

const savePerson = (request, response) => {
  let personId = request.params.personId;
  const {name, age, gender} = request.body;
  PersonModel.updateOne({ id: personId }, {$set:{name, age, gender}})
    .then(() => {
      console.log({name, age, gender});
      response.render('save');
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = savePerson;
