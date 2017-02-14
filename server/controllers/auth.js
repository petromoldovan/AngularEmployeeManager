var Employee = require('../models/employees');
var jwt = require('jwt-simple');
const config = require('../config');


function createToken(user) {
  return jwt.encode({sub: user.id}, config.secret)
}

exports.getAccount = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {return res.status(422).send({ error: "Please provide email and password"})}


  Employee.findOne({email: email}, function(err, existingUser) {
    if(err) {return next(err)}

    if(existingUser) {return res.status(422).send({error: 'This email is already used.'})}

    const employee = new Employee({
      email: email,
      password: password
    });

    employee.save(function(err) {
      return next(err)
    });

    res.send({token: createToken(employee)})
  });
};


exports.login = function(req, res, next) {
  res.send({token: createToken(req.user)})
};
