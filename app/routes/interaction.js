/**
 * Created by Vinicius on 13/09/2015.
 */
var express = require('express');
var app = express();
var interactionController = require('../controller/interaction');

/* GET home page. */
app.get('/:interactionCode/:uuid/:major/:minor', (req, res) => {
    console.log("GET /_interaction/ request received at: " + new Date());

    var interactionCode = req.params.interactionCode;
    var uuid = req.params.uuid;
    var major = req.params.major;
    var minor = req.params.minor;

    interactionController.find(interactionCode, (interaction) =>{
        var jsonResponse;
        if (!interaction) {
            jsonResponse = {
                "response_code" : "INT001",
                "message" : "Beacon exists, but no interaction data was found."
            };
        } else {
            jsonResponse = interaction;
        }

        res.json(jsonResponse);
        console.log("GET /_interaction/ request successfully handled at: " + new Date());
    });
});

module.exports = app;
