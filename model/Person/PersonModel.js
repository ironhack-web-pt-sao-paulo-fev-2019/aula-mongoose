const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonModel = mongoose.model(
  "Person",
  new Schema({
    name: String,
    age: String,
    gender: String,
  })
);
module.exports = PersonModel;