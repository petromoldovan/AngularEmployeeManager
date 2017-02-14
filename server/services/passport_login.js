const passport = require('passport');
const Employee = require('../models/employees');
const LocalStrategy = require('passport-local');


const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    Employee.findOne({email: email}, function(err, employee) {
      if(err) {return done(err)}
      if(!employee) {return done(null,false)}

      employee.comparePassword(password, function(err, isMatch) {
          if (err) {return done(err)}
          //if there it is not a match of passwords then return
          if(!isMatch) {return done(null, false)}

          return done(null, employee);
      })
    })
})

passport.use(localLogin);
