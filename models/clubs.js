const mongoose = require('mongoose');

const clubsSchema = new mongoose.Schema({
	name: String,
	type: String,
	size: Number,
})

const Club = mongoose.model('club', clubsSchema);

module.exports = Club;