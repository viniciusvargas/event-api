/**
 * Created by Vinicius on 13/09/2015.
 */

var SlidePresentation = require('../model/SlidePresentation');

function find(code, callback) {
    SlidePresentation.findOne({
        code: code
    }, function(err, slidePresentation) {
        if (err) {
            handleError(res, err);
        }
        callback(slidePresentation);
    });
};

module.exports.find = find;
