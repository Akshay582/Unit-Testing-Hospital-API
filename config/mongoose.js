const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hospital_api', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
    console.log(">error occured in the database");
})

db.once("open", () => {
    console.log(">The MongoDB is running successfully.")
})