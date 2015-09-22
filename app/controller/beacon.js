var Beacon = require('../model/beacon');

function save(user, operation, date, callback) {
    var newBeacon = new Beacon({
        user: user,
        operation: operation,
        date: date
    });

    newBeacon.save(function(err) {
        if (err) {
            handleError(res, err);
        }
        callback();
    });
};

function findAll(callback) {
    Beacon.find({}, function(err, beacons) {
        if (err) {
            handleError(res, err);
        }
        callback(beacons);

    });
};

function find(uuid, major, minor, callback) {
    Beacon.findOne({
        "uuid": uuid,
        "major": major,
        "minor": minor
    }, function(err, beacon) {
        if (err) {
            handleError(res, err);
        }
        callback(beacon);
    });
};

module.exports.save = save;
module.exports.findAll = findAll;
module.exports.find = find;