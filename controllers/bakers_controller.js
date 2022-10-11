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

//delete
baker.delete(':id', (req, res)=> {
    Baker.findByIdAndDelte(req.params.id)
    .then(deleteBaker =>{
        res.status(303).redirect('/breads')
        
    })
})
//seed
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
})

// export

// show 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 2 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


module.exports = baker

