/**
 * Created by Vinicius on 16/09/2015.
 */
var http = require('http');
var _ = require("underscore");

module.exports.coreMiddleware = function (req, res, next) {
    console.log("[/routes/middleware/beacon] process started.");

    var uuid = req.params.uuid;
    var major = req.params.major;
    var minor = req.params.minor;

    var optionsGet = {
        host : 'localhost',
        port : 9090,
        path : '/amaze-mobile-api/restapi/beacon/'+uuid+'/'+major+'/'+minor,
        method : 'GET'
    };

    var jsonResponse = '';
    var _req = http.request(optionsGet, function(_res) {
        _res.on('data', function(data) {
            console.log("[/routes/middleware/beacon] -- receiving data. Size: " + data.length);
            jsonResponse += data;
        });
        _res.on('end', function() {
            console.log("[/routes/middleware/beacon] --  data successfully received.");
            console.log("[/routes/middleware/beacon] --  parsing JSON. Raw Data: " + jsonResponse);
            var serverResponse = JSON.parse(jsonResponse);
            console.log("[/routes/middleware/beacon] --  JSON Parse executed.");
            req.params = _.extend({}, req.params, serverResponse);
            next();
        });
    });
    _req.end();

    _req.on('error', function(e) {
        console.error("[/routes/middleware/beacon] -- An error ocurred. Details: \n");
        console.error(e);
    });

};
