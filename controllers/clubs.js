const express = require('express');
const router = express.Router();
const Clubs = require('../models/clubs.js')


// ROUTES
// homepage
router.get('/', (req , res) => {
	res.render('clubs/index.ejs')
})

// new
router.get('/new', (req , res) => {
	res.render('clubs/new.ejs')
})


module.exports = router;