/**
 * Created by Vinicius on 28/08/2015.
 */

var mapRoutes = function mapRoutes(app) {
    var express = require('express');
    var subApp = express();

    var test = require('../routes/test');
    var track = require('../routes/track');
    var beacon = require('../routes/region');
    var interaction = require('../routes/interaction');

    subApp.use('/test', test);
    subApp.use('/track', track);
    subApp.use('/beacon', beacon);
    subApp.use('/interaction', interaction);
    app.use('/eventapi', subApp);
};

module.exports.mapRoutes = mapRoutes;
