var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var bioSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    address: {
        street: String,
        house: Number,
        zip: Number,
        city: String
    }
});


//encrypt last name
bioSchema.pre('save', function(next) {
    const bio = this;

    bcrypt.genSalt(10, function(err, salt){
        if(err) {return next(err)}

        bcrypt.hash(bio.last_name, salt, null, function(err, hash) {
            if(err) {return next(err)}
            bio.last_name = hash;

            next();
        })
    })
})


const BioClass = mongoose.model('bio', bioSchema);

module.exports = BioClass;
