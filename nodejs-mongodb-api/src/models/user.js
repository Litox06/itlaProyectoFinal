const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuarios', userSchema)