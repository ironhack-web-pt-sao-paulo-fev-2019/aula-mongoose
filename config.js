const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const Routes = require('./routes');

const dbName = 'aula-mongoose';

mongoose.connect(`mongodb://localhost/${dbName}`, (err) => {
    err ? 
        console.log('Deu erro!')
    :
        console.log(`Conectamos no db: ${dbName}!`)
    
})

module.exports = {
    app,
    mongoose
}