/**
 * Created by Vinicius on 09/09/2015.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({
    uuid: String,
    major: String,
    minor: String,
    interaction_code: String
});

var Track = mongoose.model('beacons', beaconSchema);

module.exports = Track;