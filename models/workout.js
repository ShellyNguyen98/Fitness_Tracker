const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const Workout = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: false
            },
            reps: {
                type: Number,
                required: true
            },
            sets: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            }
        }, , { timestamps: true }
    ]
})

module.exports = model ('Workout', Workout)