// dependencies
const express = require('express')
const baker = express.Router()
//const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

// Index:
// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

// baker.get('/', (req, res) => {
//     Baker.find()
//         .then(foundBakers => {
//             res.send(foundBakers)
//         })
// })                    

// baker.get('/data/seed', (req, res) => {
//     Baker.insertMany(bakerSeedData)
//     .then(res.redirect('/breads'))
// })

// export

//Show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

module.exports = baker

