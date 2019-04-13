const PersonModel = require('../../Person/PersonModel');

const person =  PersonModel.find()
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })

module.exports = person