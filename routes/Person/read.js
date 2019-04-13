const PersonModel = require('../../model/Person/PersonModel');

const readPerson = (request,response) =>{

    const person =  PersonModel.find()
        .then(data =>{
           response.send(JSON.stringify(data));
        })
        .catch(error =>{
            console.log(error);
        })
    response.send("estou na leitura");
}

module.exports = readPerson;