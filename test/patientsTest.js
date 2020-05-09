const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

//Assertion style 
chai.should();

chai.use(chaiHttp);

describe('Patient routes of the Hospital API', () => {
    describe("POST /patients/register", () => {
        it("Returns the newly created patient", done => {
            const patient = {
                phone: 2222222234,      // change every time as it is unique
                name: 'Krysten'
            }
            chai.request(server)
                .post("/patients/register")
                .set('content-type', 'application/x-www-form-urlencoded')
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