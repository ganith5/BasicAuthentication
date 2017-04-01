/**
 * Created by pavithraabhishek on 4/1/17.
 */



//var express = require('express')
var passport = require('passport');

var Strategy = require('passport-http').BasicStrategy;

var usersData = require(__dirname + '/userdata/users');


passport.use(new Strategy(
    function(username, password, done) {
        console.log("1  = " );
        var user = usersData.verifyUsers(username, password);
        console.log("User 6 = " + user);
        if(user) {
            return done(null, true);
        }
        else {
            return done(null, false);
        }
    }
));

var auth = passport.authenticate('basic', {session: false});

exports.auth = auth;



