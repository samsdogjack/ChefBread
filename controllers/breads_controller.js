const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");
//const Baker = require("../models/baker.js")

// INDEX
breads.get('/', (req, res) => {
  Bakers.find()
  .then(foundBakers => {
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        bakers: foundBakers
        title: 'Index Page'
      })
    })
  })
})

breads.get('/new', (req, res) => {
  res.render('new')
})


// NEW
// breads.get('/:id/edit', (req, res) => {
//   Bread.findById(req.params.id) 
//     .then(foundBread => { 
//       res.render('edit', {
//         bread: foundBread 
//       })
//     })
// })

// in the new route
breads.get('/new', (req, res) => {
  Baker.find()
      .then(foundBakers => {
          res.render('new', {
              bakers: foundBakers
          })
    })
})

//show before instance method
// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
  .populate('baker')
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    }).catch(err => {
      res.send('404')
    })
})


// breads.get('/:arrayIndex', (req, res) => {
//   if (Bread[req.params.arrayIndex]) {
//     res.render('Show', {
//       bread: Bread[req.params.arrayIndex],
//       index: req.params.arrayIndex,
//     })
//   } else {
//     res.render('404')
//   }
// })

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})



// UPDATE
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
  .then(updatedBread => {
    console.log(updatedBread) 
    res.redirect(`/breads/${req.params.id}`) 
  })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.findById(req.params.id)
      .then(foundBread => {
        res.render('edit', {
          bread: foundBread,
          index: foundBakers
        })
      })
  })
})

// DELETE
// breads.delete('/:indexArray', (req, res) => {
//   Bread.splice(req.params.indexArray, 1)
//   res.status(303).redirect('/breads')
// })
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      res.status(303).redirect('/breads')
    })
})


module.exports = breads;
