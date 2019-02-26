
const express = require('express');

const apiRoutes = require("./routes/api-routes.js");

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
 }));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});