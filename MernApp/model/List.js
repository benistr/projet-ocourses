// Imports
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Ici on crée les "champs" de notre bdd
const ListSchema = new mongoose.Schema ({
  title: {
      type: String,
      require: true,
  },
  description: {
      type: String,
      require: true,
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
}],  
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  
});

mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('List', ListSchema);

// ObjectId: c'est la façon comme mongoose stocke l'id de l'user