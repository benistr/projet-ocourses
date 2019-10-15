// Imports
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Ici on crée les "champs" de notre bdd
const ProductSchema = new mongoose.Schema ({
  title: {
      type: String,
      require: true,
  },
  list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
      require: true,
  },
  assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
  },
  description: {
      type: String,
      require: true,
  },
  completed: {
      type: Boolean,
      require: true,
      default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  
});

module.exports = mongoose.model('Product', ProductSchema);

// ObjectId: c'est la façon comme mongoose stocke l'id de l'user

// Un produit va appartenir à une liste 

// completed: si la liste a été completé