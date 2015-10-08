* Created by Vinicius on 09/09/2015.
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _profile_schema = new Schema({
   username: String,
   name: String,
   message: String,
   url_picture: String
});

var _profile_model = mongoose.model('profile', _profile_schema);

function create(username, name, message, url_picture) {
 return new _profile_model({
   username: username,
   name: name,
   message: message,
   url_picture: url_picture
 });
};

module.exports.create = create;
