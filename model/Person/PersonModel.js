const mongoose = require('mongoose');

const { Schema } = mongoose;

const PersonModel = mongoose.model('Person', new Schema({
  name:{type:String, default:'', unique:true, required:true} ,
  age: Number,
  gender: String,
  
}));

module.exports = PersonModel;
