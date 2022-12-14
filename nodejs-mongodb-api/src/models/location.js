const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    latitud: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ubicaciones', locationSchema)