var Bio = require('../models/bio');

exports.addBio = function(req, res, next) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const age = req.body.age;
    const street = req.body.street;
    const house = req.body.house;
    const zip = req.body.zip;
    const city = req.body.city;

    const bioInfo = new Bio({
        first_name: first_name,
        last_name: last_name,
        age: age,
        address: {
            street: street,
            house: house,
            zip: zip,
            city: city
        }
    })

    bioInfo.save(function(err) {
       return next(err);
    });

    res.send({bioAdded: bioInfo})
}
