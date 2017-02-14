var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var employeesSchema = mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String
});

//encrypt password in db
employeesSchema.pre('save', function(next) {
    const employee = this;

    bcrypt.genSalt(10, function(err, salt) {
        if(err) {return next(err)}

        bcrypt.hash(employee.password, salt, null, function(err, hash) {
            if(err) {return next(err)}

            employee.password = hash;

            next();
        })
    })
})


employeesSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) {return callback(err)};

        callback(null, isMatch);
    })
};


const EmployeeClass = mongoose.model('employee', employeesSchema);

module.exports = EmployeeClass;
