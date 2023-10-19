const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


//Schema de l'objet utilisateur
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    lastname: {
        type: String,
        requied: false,
        unique: false,
    },
    firstname: {
        type: String,
        required: false,
        unique: false,
    },
    address: {
        type: String,
        required: false,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);