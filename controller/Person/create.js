const PersonModel = require('../../model/Person/PersonModel');

const createPerson = (request,response) => {

    let { name } = request.body;
    let { age } = request.body;
    let { gender } = request.body;
    
    const personDoc = {
        name: name,
        age: age,
        gender: gender
    }
    
    PersonModel.create(personDoc, (err) => {
        if (err) {
            console.log(`Não deu certo, erro: ${err}`)
            response.send(`Não deu certo, erro: ${err}`)
        } else {
            console.log(`O usuário ${name} foi criado!`)
            response.render('create', {personDoc})
        }
    })
}

module.exports = createPerson;

