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
                phone: 2222222224,
                name: 'Krysten'
            }
            chai.request(server)
                .post("/patients/register")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(patient)
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                })
        })
    })
})