const express = require('express');
const app = express();
const passport = require('passport');

const port = 8000;
const mongoDB = require('./config/mongoose');
const passportJwt = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err)
        console.log(`Error while trying to run the server: ${err}`);
    console.log(`Port: ${port}`);
});