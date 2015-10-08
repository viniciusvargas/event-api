/**
 * Created by Vinicius on 09/09/2015.
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var account_schema = new Schema({
    user: String,
    password: String
});

var _account_model = mongoose.model('account', account_schema);

function create(user, password) {
  return new _account_model({
    user: user,
    password: password
  });
};

module.exports.create = create;
