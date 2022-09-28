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
breads.get("/:arrayIndex", (req, res) => {
  res.send("Show", {
    bread: Bread[req.params.arrayIndex],
  });
});



module.exports = breads;
