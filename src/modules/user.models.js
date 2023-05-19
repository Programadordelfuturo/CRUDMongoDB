const mongoose = require("mongoose");

const userModels = mongoose.Schema({
  id: {
    type: Number,
    
  },
  name:{
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  sports: {
    type: Number,
    
  }
}, {
  versionkey: false
});

module.exports = mongoose.model('user', userModels);