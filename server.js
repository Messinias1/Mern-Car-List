const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cars = require('./routes/api/cars')

const app = express()

// body parser middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys')

// Connect to mongo
mongoose
    .connect(db.mongoURI, {
        useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/cars', cars)
// app.use(express.static("public"))
// app.use(bodyParser.json())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))