const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
  });
});


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
     // index: req.params.arrayIndex,
    })
  } else {
    res.render('404')
  }
})

// DELETE
// breads.delete('/:indexArray', (req, res) => {
//   Bread.splice(req.params.indexArray, 1)
//   res.status(303).redirect('/breads')
// })

//   // CREATE
//   breads.post('/', (req, res) => {
//     console.log(req.body)
//     if(req.body.hasGluten === 'on') {
//       req.body.hasGluten = 'true'
//     } else {
//       req.body.hasGluten = 'false'
//     }
//     Bread.push(req.body)
//     res.redirect('/breads')
//   })

module.exports = breads;
