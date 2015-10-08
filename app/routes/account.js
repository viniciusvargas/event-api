var express = require('express');
var accountController = require('../controller/account');

var app = express();

app.post('/signin', function(req, res) {
    console.log("POST /account/login/ request received at: " + new Date());
    var user = req.body.email;
    var password = req.body.password;
    var date = req.body.date;

    accountController.save(user, operation, date);

    res.json({
        "code":"ACC001",
        "message":"Login Successful."
    });

    console.log("POST /track/ request successfully handled at: " + new Date());
});
