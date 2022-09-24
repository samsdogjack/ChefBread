const express = require('express')
const breads = express.Router()
const bread = require('..models/bread')

// INDEX
breads.get('/', (req, res) => {
  res.send('This is the index at /breads')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads



