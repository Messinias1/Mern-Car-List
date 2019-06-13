const express = require('express')
const router = express.Router()

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
// @access Public
router.post('/', (req, res) => {
    const newCar = new Car({
        name: req.body.name
    })

    newCar.save().then(car => res.json(car))
})

// @route DELETE api/cars
// @desc Delete a car
// @access Public
router.delete('/:id', (req, res) => {
    Car.findById(req.params.id)
    .then(car => car.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


module.exports = router