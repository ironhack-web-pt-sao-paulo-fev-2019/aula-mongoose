const PersonModel = require('../../model/Person/PersonModel');

const updatePerson = (request, response) => {
    let personId = request.params.personId;
    PersonModel.findOne({"_id" : personId})
    .then(data => {
        response.render('update',data);
    }
    ).catch(err => console.log(err));
}

module.exports = updatePerson;