var express = require('express');
var trackController = require('../controller/track');

var app = express();

/* GET home page. */
app.post('/', function(req, res) {
    console.log("POST /_track/ request received at: " + new Date());
    var user = req.body.user;
    var operation = req.body.operation;
    var date = req.body.date;

    trackController.save(user, operation, date);

    res.json({
        "code":"TRA001",
        "message":"Track successfully received"
    });

    console.log("POST /_track/ request successfully handled at: " + new Date());
});

app.get('/', function(req, res) {
    console.log("/_track/all GET request received at: " + new Date());

    trackController.findAll(tracks => {
        res.json(tracks);
        console.log("/_track/all GET request successfully handled at: " + new Date());
    });

})

module.exports = app;

