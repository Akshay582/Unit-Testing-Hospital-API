const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospit@l'
}

console.log('Passport jwt working.');
passport.use(new JWTStrategy(opts, function(jwtPayload, done){
    console.log('*****************2');
    Doctor.findById(jwtPayload._id, function(err, doctor){
        if(err){
            console.log('Error in finding doctor from jwt.');
            return;
        }
        if(doctor){
            return done(null, doctor);
        }else{
            return done(null, false);
        }
    })
}))

module.exports = passport;