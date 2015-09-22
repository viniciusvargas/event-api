/**
 * Created by Vinicius on 26/08/2015.
 */

// grab the things we need
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var trackSchema = new Schema({
    user: String,
    operation: String,
    date: Date
});

trackSchema.pre('save', function(next) {
    //get the current date
    var currentDate = new Date();

    this.date = currentDate;

    next();
});

var Track = mongoose.model('tracks', trackSchema);

module.exports = Track;