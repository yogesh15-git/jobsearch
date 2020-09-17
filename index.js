
require('./model/db');
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
var apiroutes = require('./route/route');;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use('/', apiroutes);


var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
