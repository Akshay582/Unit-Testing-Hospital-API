const mongoose = require('mongoose');

const patientReportSchema = new mongoose.Schema({
    status: {
        type: 'String',
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        default: 'Symptoms-Quarantine' //should be made on the basis of true positives and true negatives

    },
    doctor: {
        type: 'String',
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
}, {
    timestamps: true
})

const PatientReport = mongoose.model('PatientReport',patientReportSchema);

module.exports = PatientReport;