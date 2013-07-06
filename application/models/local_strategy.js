// Local Strategy for Authentication
var LocalStrategy = require('passport-local').Strategy,
		user = require('./user');


var myStrategy = new LocalStrategy(
	function(username, password, done) {
		user.checkUser(username, function(error, user) {
			if (error) { return done(error) };
			if (!user || user.password !== password){
				return done(null, false, { message: 'Incorrect User and/or Password' });
			}
			return done(null, user);
		});
	});

var mySerializeUser = function(username, done) {
	done(null, username.user);
};

var myDeserializeUser = function(username, done) {
	user.checkUser(username, function(error, user) {
		done(error, user);
	});
};

// Export LocalStrategy 
exports.Strategy = myStrategy;
exports.SerializeUser = mySerializeUser;
exports.DeserializeUser = myDeserializeUser;