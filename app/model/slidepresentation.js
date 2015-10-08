/**
 * Created by Vinicius on 13/09/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slide_presentation = new Schema({
    code: String,
    slides: [{key: String, url: String}],
    details: [{key: String, text: String}]
});

var Track = mongoose.model('slide_presentation', slide_presentation);

module.exports = Track;
