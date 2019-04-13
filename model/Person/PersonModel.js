const mongoose = require('mongoose');

const { Schema } = mongoose;

const PersonModel = mongoose.model('Person', new Schema({
  name: { type: String, unique: true },
  age: Number,
  gender: String,
}));

module.exports = PersonModel;
