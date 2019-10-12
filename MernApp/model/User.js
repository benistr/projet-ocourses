const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    surname: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        select: false,
        min: 8,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  
    next();

});

module.exports = mongoose.model('User', userSchema);