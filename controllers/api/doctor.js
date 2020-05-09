const Doctor = require('../../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.create = function(req, res) {
    Doctor.findOne({username: req.body.username}, function(err, doctor){
        if(err){console.log('Error in doctor controller:', err); return;}
        if(!doctor){
            Doctor.create(req.body, function(err, doctor){
                if(err){console.log('Error in doctor controller:', err); return ;}
            })
        }
    })
}

module.exports.createSession = async function(req, res){
    try {
        let doctor = await Doctor.findOne({username: req.body.username});
        if(!doctor || doctor.password !== req.body.password){
            return res.status(422).json({
                message: 'Invalid username or password!'
            })
        }
        return res.status(200).json({
            message: 'Sign in is successful. Token has been provided, please keep it safe.',
            data: {
                token: jwt.sign(doctor.toJSON(), 'hospit@l', {expiresIn: '6000000'})
            }
        })
    } catch (error) {
        console.log('*************', error);
        return res.status(500).json({
            message: 'Internal server error.'
        })
    }
}