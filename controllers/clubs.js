const express = require('express');
const router = express.Router();

// MODELS
const Clubs = require('../models/clubs.js')


// ROUTES
// homepage
router.get('/', (req , res) => {
	Clubs.find({}, (err, allClubs) => {
		res.render('clubs/index.ejs', {
			clubs: allClubs
		})
	})
})

// new
router.get('/new', (req , res) => {
	Clubs.find({}, (err, allClubs) => {
		res.render('clubs/new.ejs', {
			clubs: allClubs
		})
	})
})

router.post('/', (req , res) => {
	Clubs.create(req.body, (err, newClub) => {
		res.redirect('/clubs')
	})
})

// show
router.get('/:id', (req , res) => {
	Clubs.findById(req.params.id, (err, foundClub) => {
		res.render('clubs/show.ejs', {
			club: foundClub
		})
	})
})

// delete
router.delete('/:id', (req , res) => {
	Clubs.findByIdAndRemove(req.params.id, (err, deletedClub) => {
		res.redirect('/clubs')
	})
})

// edit
router.get('/:id/edit', (req , res) => {
	Clubs.findById(req.params.id, (err, editClub) => {
		res.render('clubs/edit.ejs', {
			club: editClub
		})
	})
})

router.put('/:id', (req , res) => {
	Clubs.findByIdAndUpdate(req.params.id, req.body, (err, foundClub) => {
		if(err) {
			console.log(err);
		}
		res.redirect('/clubs')
	})
})


module.exports = router;