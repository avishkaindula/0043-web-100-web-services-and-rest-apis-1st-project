const express = require("express");

const quotesController = require("../controllers/quotes.controller");

const router = express.Router();

router.get("/", quotesController.getRandomQuote);
// This is actually quote/ as we've add quote prefix in app.use("/quote") in app.js

module.exports = router;
