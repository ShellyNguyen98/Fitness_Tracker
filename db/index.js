module.exports = require('mongoose').connect('mongodb://localhost/Workout_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})