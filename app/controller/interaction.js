/**
 * Created by Vinicius on 13/09/2015.
 */

var Interaction = require('../model/interaction');

function find(interactionCode, callback) {
    Interaction.findOne({
        interaction_code: interactionCode
    }, function(err, interaction) {
        if (err) {
            handleError(res, err);
        }
        callback(interaction);
    });
};

module.exports.find = find;
