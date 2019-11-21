const express = require("express");
const router = express.Router();
const indeed = require("../models/indeed");
const scrape = require("../scraper");

let jobs = null;
router.get("/indeed/new", (req, res) => {
  res.render("indeed.ejs");
});

router.post("/indeed", async (req, res) => {
  let indeedParams = req.body;
  jobs = await scrape(indeedParams);
  console.log(jobs);
  res.redirect("/indeed");
});

router.get("/indeed", (req, res) => {
  res.render("indeedview.ejs", {
    search: jobs
  });
});

module.exports = router;
