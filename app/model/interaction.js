/**
 * Created by Vinicius on 13/09/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var interactionSchema = new Schema({
    interaction_code: String,
    interaction_type: String,
    interaction_data: Schema.Types.Mixed
});

var Track = mongoose.model('interactions', interactionSchema);

module.exports = Track;