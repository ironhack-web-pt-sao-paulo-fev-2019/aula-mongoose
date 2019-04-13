const dbName = "aula-mongoose";
const mongoose = require("mongoose");
const routes = require('./routes');
const express = require('express');
const app = express();

mongoose.connect(`mongodb://localhost/${dbName}`, (error) => {
  if (error) {
    console.log("Não consegui conectar");
  } else {
    console.log(`CONECTAMOS EM ${dbName}`);
  }
});

module.exports = {
  mongoose,
  app,
}