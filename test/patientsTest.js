const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

const server = require('../index');
const Doctor = require('../models/doctor');

//Assertion style 
chai.should();

chai.use(chaiHttp);

/* **************
*   GENERATE A NEW TOKEN FROM THE DOCTOR LOGIN ROUTE IN THE API
*/
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTliMWFhNWQ0NmE4YTNiYzhjN2E1MmIiLCJ1c2VybmFtZSI6InNoYWgiLCJwYXNzd29yZCI6IjEyMzQiLCJfX3YiOjAsImlhdCI6MTU4OTAxNzUxNiwiZXhwIjoxNTg5MDIzNTE2fQ.2uyQplX62v2Rro-EuHroezlIGItLLJQifp4FW9q3ULk';

describe('Patient routes of the Hospital API', () => {
    describe("POST /patients/register", () => {
        it("Returns the newly created patient", done => {
            const patient = {
                phone: 2222222236,      // change every time as it is unique
                name: 'Krysten'
            }
            chai.request(server)
                .post("/patients/register")
                .set('content-type', 'application/x-www-form-urlencoded')
                .set({'Authorization':  'Bearer ' + token})
                .send(patient)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.patient.should.have.property('phone');
                    res.body.patient.should.have.property('name');
                done();
                })
        })
    })

    describe("POST /patients/:id/create_report", () => {
        it("Returns the newly created report of patient with [:id]", done => {
            const reportBody = {
                doctor: 'Dr. Shah'
            }
            const reportQuery = {
                id: "5eb65696242c982970d9c884"
            }
            chai.request(server)
                .post(`/patients/${reportQuery.id}/create_report`)
                .set('content-type', 'application/x-www-form-urlencoded')
                .set({'Authorization':  'Bearer ' + token})
                .send(reportBody)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.report.should.have.property('status');
                    res.body.report.should.have.property('doctor');
                    res.body.report.should.have.property('patient');
                done();
                })
        })
    })

    describe("POST /patients/:id/all_reports", () => {
        it("Returns all reports of the patient with [:id]", done => {
            const reportQuery = {
                id: "5eb65696242c982970d9c884"
            }
            chai.request(server)
                .get(`/patients/${reportQuery.id}/all_reports`)
                .set({'Authorization':  'Bearer ' + token})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.reports.should.be.a('array');
                    res.body.reports[0].should.have.property('status');
                    res.body.reports[0].should.have.property('doctor');
                    res.body.reports[0].should.have.property('patient');
                done();
                })
        })
    })
})