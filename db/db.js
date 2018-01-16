const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/club', {
	useMongoClient: true
})

mongoose.connection.once('open', () => {
	console.log('connected to mongoDB');
})