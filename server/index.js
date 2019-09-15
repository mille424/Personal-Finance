const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
var githubStrategy = require('passport-github').Strategy;
const config = require('./config.js');

const app = express();

//things the app will use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'))


passport.use(new githubStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: 'http://localhost:4568/auth'
}, function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});


//handle routes

//authentication
app.get('/github', 
  passport.authenticate('github')
);

app.post('/expenses', (req, res) => {
	console.log('handling request to save expenses')
	
	console.log(req.body)

	res.end()
});



const port = 3333
app.listen(port, () => {
	console.log('app is listening on port ', port)
})



