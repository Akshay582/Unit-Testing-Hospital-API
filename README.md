# Hospital API

Hello,

<u>This is a quick walkthrough for the api that I have created.</u>

## Routes

#### 1. Doctors

`/doctors/register `

`doctors/login`

#### 2. Patients

`/patients/register ` **(protected)**

`/patients/:id/create_report` **(protected)**

`/patients/:id/all_reports ` **(protected)**

### 3. Reports

`/reports/:status `**(protected)**



## Functionality

- To install the dependencies run the following command in terminal/PowerShell:

  ```Node.js
  npm install 
  ```

  The above line install all the dependencies required on a project that is currently without the node module.

- To run the project  run the following command in terminal/PowerShell:

  ```
  npm start
  ```

- All the **protected** routes require authentication using **Json Web Tokens** which can be generated using the `doctors/login` which requires the doctor to be registered and requires `/doctors/register` relative path.

## Testing

- The testing in this project is done using **mocha** and the assertions and the server running for the testing are done using **chai**.

- To test the project you need to constantly update (for now) the phone of the patient as it is unique attribute in mongo dB schema. This is the 4th line as seen below and is present in the patientsTest.js file.

  ```
  ...
  describe("POST /patients/register", () => {
          it("Returns the newly created patient", done => {
              const patient = {
                  phone: 2222222236,      // ***********change every time
                  name: 'Krysten'
              }
              chai.request(server)
                  .post("/patients/register")
                  .set('content-type', 'application/x-www-form-urlencoded')
  ...
  ```

- To run the test use the following command in the terminal/PowerShell:

  ```
  npm test
  ```

- In future, the patients created through testing shall be removed before the testing is terminated.



