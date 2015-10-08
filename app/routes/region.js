/**
 * Created by Vinicius on 09/09/2015.
 */
var express = require('express');
var coreMiddleware = require('../middleware/beacon').coreMiddleware;
var regionController = require('../controller/beacon');

var app = express();

app.get('/:major/:minor', coreMiddleware, (req, res) => {
    console.log("GET /beacon/ request received at: " + new Date());
    var major = req.params.major;
    var minor = req.params.minor;

    var serverResponse = req.params.responseCode;
    var jsonResponse;

    if (serverResponse == 'BCN001') {
        console.log("[/routes/beacon] Beacon does not belong to this App.");
        jsonResponse = req.params;
    } else {
        regionController.find(uuid, major, minor, (region) => {
            if (!region) {
                // If there's no beacon available, but the beacon exists in the core server
                // we'll update the establishment database so it can become available to the customer
            } else {
                jsonResponse = region;
            }
        });
    };
    res.json(jsonResponse);
    console.log("GET /beacon/ request successfully handled at: " + new Date());
});

module.exports = app;
