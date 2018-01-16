const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// DB
require('./db/db');

// ROUTES
const clubsController = require('./controllers/clubs.js')
app.use('/clubs', clubsController)

app.get('/', (req , res) => {
	res.redirect('/clubs')
})


app.listen(3000, () => {
	console.log('CRUD_LAB on port 3k baby');
})