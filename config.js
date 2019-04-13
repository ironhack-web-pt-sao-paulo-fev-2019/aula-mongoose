const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const Routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.use(bodyParser.urlencoded({extended:true}))
const dbName = 'aula-mongoose';

mongoose.connect(`mongodb://localhost/${dbName}`, (err) => {
    err ? 
        console.log('Deu erro!')
    :
        console.log(`Conectamos no db: ${dbName}!`)
    
})

module.exports = {
    app,
    mongoose,
  
}

