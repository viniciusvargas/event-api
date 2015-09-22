var Track = require('../model/track');

function save(user, operation, date) {
    var newTrack = new Track({
        user: user,
        operation: operation,
        date: date
    });

    newTrack.save(function(err) {
        if (err) {
            handleError(res, err);
        }
        else {
            console.log('Track successfully saved.');
        }
    });
};

function findAll(callback) {
    Track.find({}, function(err, tracks) {
        if (err) {
            handleError(res, err);
        } else {
            callback(tracks);
        }
    });
};

module.exports.save = save;
module.exports.findAll = findAll;