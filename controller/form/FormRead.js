const PersonModel = require('../../model/Person/PersonModel');

const formRead = (require, response) => {
  PersonModel.find().then((data) => {
    response.render('read', { data });
    console.log('leu!');
  }).catch(error => console.log(error));
};
module.exports = formRead;
