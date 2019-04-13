const PersonModel = require('../../model/Person/PersonModel');

const deletePerson = (request, response) => {
    
    // console.log(request.params.personId);

    PersonModel.remove({ _id: request.params.personId }, (err) => {
        err ? response.send(`Deu erro ${err}`) : response.send(`Deletado com sucesso!`)
    });
}

module.exports = deletePerson;