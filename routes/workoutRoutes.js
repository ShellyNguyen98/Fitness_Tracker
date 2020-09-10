const router = require('express').Router()
const { Workout } = require('../models')

// GET all items
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// POST one item
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// PUT one item
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// DELETE one item
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router