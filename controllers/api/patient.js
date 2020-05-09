const Patient = require('../../models/patient');

module.exports.create = function(req, res) {
    Patient.findOne({phone: req.body.phone}, function(err, patient){
        if(err){console.log('Error in patient controller1:', err); return;}
        if(!patient){
            Patient.create(req.body, function(err, patient){
                if(err){console.log('Error in patient controller2:', err); return ;}
                return res.json(200, {
                    message: "Patient created successfully.",
                    patient
                })
            });
        }else{
            return res.json(409, {
                message: "The patient already exists doctor. Please go ahead and make the report using the :[patient_ID]/create_report route."
            })
        }
    })
}