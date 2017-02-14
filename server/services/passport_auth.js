//here we authenticate user when he makes a request
const passport = require('passport');
const config = require('../config');
const Employee = require('../models/employees')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('bearer'),
    secretOrKey: config.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

    Employee.findById(payload.sub, function(err, employee) {
        if(err) {return done(err, false)};

        if(employee) {
            done(null, employee)
        } else {
            done(null, false)
        }
    })
})

passport.use(jwtLogin);
