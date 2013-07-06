// Import MoongoDB Connection
var db = require('../config/config_db'),
		user = db.collection('users'); 

exports.checkUser = function(username, callback) {
	user.findOne({user: username}, function(error, user){
			if (user){
				return callback(null, user);
			}else{
				return callback(error, null);
			}
		});
}

exports.secureLogin = function(req, res, next) {
	if(req.isAuthenticated()){
		console.log('Yeah Funciona');
		return next();
	}
	req.session.rutaLogin = req.route.path;
	console.log(req.session.rutaLogin);
	res.redirect('/adminLogin');
}