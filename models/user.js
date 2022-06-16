const { Schema, model } = require('mongoose');

const Userschema = new Schema({
  Username: {
    type: String,
    unique: true
  },
  email: 
    {
      type: String,
      unique: true
      
    }
    
  
});

const User = model('User', Userschema);

module.exports = User;