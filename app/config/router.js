/**
 * Created by Vinicius on 28/08/2015.
 */

var mapRoutes = function mapRoutes(app) {
    var express = require('express');
    var subApp = express();

    var test = require('../routes/test');
    var track = require('../routes/track');
    var beacon = require('../routes/beacon');
    var interaction = require('../routes/interaction');

    subApp.use('/test', test);
    subApp.use('/_track', track);
    subApp.use('/_beacon', beacon);
    subApp.use('/_interaction', interaction);
    app.use('/ax-redshoes', subApp);
};

module.exports.mapRoutes = mapRoutes;