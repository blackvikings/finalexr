
const express = require('express');

const apiRoutes = require("./routes/api-routes.js");

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const url = 'mongodb://localhost/resthub';

var wating = [];

app.use(bodyParser.urlencoded({
    extended: true
 }));

app.use(bodyParser.json());

mongoose.connect(url, function(err, database){
    error = err;
    db = database;

    wating.forEach(function (callback){
        callback(err, database);
    })
});

var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});