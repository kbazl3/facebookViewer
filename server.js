var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(session({secret: "c c c c c c c yeahh"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser());

passport.use(new FacebookStrategy({
  clientID: keys.facebookKey,
  clientSecret: keys.facebookSecret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
    //go to mongo get _id for use, put that on session
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
    //get data off of session (see serialUser)
  done(null, obj);
  //put it on req.user in EVERY ENDPOINT
});

app.get('/auth/facebook', passport.authenticate("facebook"));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/auth/facebook'
}));

app.get('/profile', function(req, res) {
    res.status(200).json(req.user);
});

app.listen( port, function () {
  console.log( 'listening on port ', port );
} );
