const PersonModel = require('../../model/Person/PersonModel');

const modifyPerson = (request, response) => {
    console.log(request.body)
    let personId = request.body.id;
    let { name } = request.body;
    let { age } = request.body;
    let { gender } = request.body;

    PersonModel.update(
        {_id : personId}, 
        {name : name, age : age, gender : gender})
    response.send('Atualizado!')
}

module.exports = modifyPerson;