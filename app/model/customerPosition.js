/**
 * Created by Vinicius on 17/09/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerBeaconPositionTrackingSchema = new Schema({
    uuid: String,
    major: String,
    minor: String,
    customer: String,
    distance: Number
});

var CustomerBeaconPositionTracking = mongoose.model('customerBeaconPositionTracking', customerBeaconPositionTrackingSchema);

module.exports = CustomerBeaconPositionTracking;