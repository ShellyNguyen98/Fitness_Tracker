module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/Workout_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})