var Account = require('../model/account');
var AccountTrack = require('../model/accountTrack');

function signIn(user, password) {
    var account = Account.create(user, password);

    new_account.save(function(err) {
        if (err) {
            handleError(res, err);
        }
        else {
            console.log('account successfully saved.');
        }
    });
};

function logIn(user, password, callback) {
    Account.find({}, function(err, accounts) {
        if (err) {
            handleError(res, err);
        } else {
            if (accounts.length != 0) {

            } else {
              _trackAuthentication('login', 'successful', user);
              callback(accounts);
            }
        }
    });
};

function logOut(user) {
    var new_account = Account.create(user, password);
    });

    new_account.save(function(err) {
        if (err) {
            handleError(res, err);
        }
        else {
            console.log('account successfully saved.');
        }
    });
};

function _trackAuthentication(type, result, user) {
  var new_track = new AccountTrack({
    type: type,
    result: result,
    user: user
  });

}



module.exports.signIn = signIn;
module.exports.logIn = logIn;
module.exports.logOut = logOut;
