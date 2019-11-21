const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/users.js");

router.get("/new", (req, res) => {
  res.render("users/new.ejs");
});

router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    res.redirect("/");
  });
});

module.exports = router;
