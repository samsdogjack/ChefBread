// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread')

//[ ... ]

// Virtuals:
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// schema
const bakerSchema = new Schema({
    [ ... ]
}.{ toJSON: { virtuals: true }})
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})



// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
