/**
 * Created by Vinicius on 13/09/2015.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({
    login: String,
    password: String
});

var Track = mongoose.model('users', beaconSchema);

module.exports = Track;