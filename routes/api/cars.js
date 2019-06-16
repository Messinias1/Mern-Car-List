const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Car Model
const Car = require('../../models/Car')

// @route GET api/cars
// @desc Get all Cars
// @access Public
router.get('/', (req, res) => (
    Car.find()
        .sort({ date: -1 })
        .then(cars => res.json(cars))
))

// @route POST api/cars
// @desc Create a car
// @access Private
router.post('/', auth, (req, res) => {
    const newCar = new Car({
        name: req.body.name
    })

    newCar.save().then(car => res.json(car))
})

// @route DELETE api/cars
// @desc Delete a car
// @access Private
router.delete('/:id', auth, (req, res) => {
    Car.findById(req.params.id)
    .then(car => car.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


module.exports = router