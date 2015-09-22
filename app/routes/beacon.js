/**
 * Created by Vinicius on 09/09/2015.
 */
var express = require('express');
var coreMiddleware = require('../middleware/beacon').coreMiddleware;
var beaconController = require('../controller/beacon');

var app = express();

app.get('/:uuid/:major/:minor', coreMiddleware, (req, res) => {
    console.log("GET /_beacon/ request received at: " + new Date());
    var uuid = req.params.uuid;
    var major = req.params.major;
    var minor = req.params.minor;

    var serverResponse = req.params.responseCode;
    var jsonResponse;

    if (serverResponse == 'BCN001') {
        console.log("[/routes/beacon] Beacon does not belong to this App.");
        jsonResponse = req.params;
    } else {
        beaconController.find(uuid, major, minor, (beacon) => {
            if (!beacon) {
                // If there's no beacon available, but the beacon exists in the core server
                // we'll update the establishment database so it can become available to the customer
            } else {
                jsonResponse = beacon;
            }
        });
    };
    res.json(jsonResponse);
    console.log("GET /_beacon/ request successfully handled at: " + new Date());
});

module.exports = app;