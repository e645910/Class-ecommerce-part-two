var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var mongoUri = 'mongodb://localhost:27017/ecommerce-day-two';
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var app = express();
app.use(bodyParser.json());
var port = 9001;

mongoose.connect(mongoUri);
mongoose.connection.once("open", function(){
console.log("Connected to localhost:" + port + " and localhost: 27017");  
});

var userCtrl = require('./server-assets/controllers/user-control');

passport.serializeUser(function(user, done){
	done(null, user);
});

passport.deserializeUser(function(obj, done){
	userCtrl.getUser(obj.id).then(function(results){
		done(null, results);
	}, function(err){
		done(err, null);
	})
});

app.use(Express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({ secret: 'EcommerceSIKRIT' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
	clientID: '698982842141-nd171aik9lq3dkn69m0lfie64duhfsi0.apps.googleusercontent.com ',
	clientSecret: 'I_sPSdLOc9YauDKB1L7UHP13',
	callbackURL: 'https://www.example.com/oauth2callback'
}, function(token, tokenSecret, profile, done){
	done(null, profile);
}));
app.get('/auth/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

app.get('/auth/google/callback', passport.authenticate('google', {
	failureRedirect: '/auth/failure'
}), function(req, res){
	res.redirect('/api/me');
})

app.listen(port, function(){
	console.log('Now listening on port: ' + port);
})

