const PatientsReport = require('../models/patientReport');
const Patient = require('../models/patient');

const mongoose = require('mongoose');

module.exports.create = async function(req, res) {
    Patient.findById(req.params.id, function(err, patient){
        if(patient){
            PatientsReport.create({
                status: req.body.status,
                doctor: req.body.doctor,
                patient: req.params.id
            }, function(err, report){
                // handle error
                if(err){console.log('error in creating a report'); return;}
                return res.json(200, {
                    message: "Report created successfully.",
                    report
                })
            });
        }else{
            return res.json(404, {
                message: "Patient doesn't exist. Please register the patient with suitable credentials."
            })
        }
    });
}

module.exports.allReports = async function(req, res){
    let reports = await PatientsReport.find({
        patient: req.params.id
    })
    return res.json(200, {
        message: "list of reports for this patient -> ",
        reports
    })
}

module.exports.sameStatus = async function(req, res){
    let reports = await PatientsReport.find({
        status: req.params.status
    })
    return res.json(200, {
        message: "list of reports of all patients for this status -> ",
        reports
    })
}