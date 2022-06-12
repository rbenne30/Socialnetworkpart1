const { Schema, model } = require('mongoose');

const Userschema = new Schema({
  Username: {
    type: String,
    unique: true
  },
  email: [
    {
      type: Schema.Types.ObjectId,
      unique: true
      
    }
    
  ]
});

const User = model('Username', Userschema);

module.exports = User;