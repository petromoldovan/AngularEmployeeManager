const auth = require('../controllers/auth');
const bio = require('../controllers/personalInfo');
const passportAuthRequiredService = require('../services/passport_auth');
const passportLoginService = require('../services/passport_login');

const passport = require('passport');


const authRequired = passport.authenticate('jwt', {session: false});
const loginAction = passport.authenticate('local', {session: false})

module.exports = function(app) {
    app
        .get('/', function(req, res){
            res.send({message: 'router go'})
        })

        .post('/getAccount', auth.getAccount)

        .post('/addBio', bio.addBio)

        .get('/error', function(req, res){
            res.send("Oooops!")
        })

        .get('/protected', authRequired, function(req, res, next){
          res.send({message: 'works'})
        })

        .post('/login', loginAction, auth.login)

        //download file
        .get('*.pdf', function(req, res, next) {
            res.download('./data/resume.pdf')
        })
};
