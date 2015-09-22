'use strict';

var assert = require('assert');

module.exports = function() {
  var trackController = require(process.cwd() + '/controller/track');
  var Track = require(process.cwd() + '/model/track');

  var track;

  this.When(/^I request the trackings to the server$/, function(next) {
    trackController.findAll(function(_callback) {
      track = _callback;
    });
    next();
  });

  this.Then(/^The server will respond with a list of all trackings$/, function(next) {
    Track.find({}, function(err, tracks) {
      if (err) {
        handleError(res, err);
      } else {
        track = tracks;
        console.log(track);
      }
    });

    //assert.notEqual(Object.keys(track).length, 0, "There should be more than 0 trackings.");
    next();
  });


}