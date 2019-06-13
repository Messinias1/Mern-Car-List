const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CarSchema = new Schema({
    name: {
        type: String, Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Car = mongoose.model('cars', CarSchema)