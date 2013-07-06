
var article = require('../models/article');
		passport = require('passport'),
		user = require('../models/user'),
		article = require('../models/article');

module.exports = function(app) {
	
	app.get('/adminLogin', function(req, res) {
		res.render('admin_login');
	});

	app.post('/adminLogin', 
		passport.authenticate('local', { 
																			successRedirect: '/adminPanel',
																			failureRedirect: '/adminLogin', 
																			failureFlash: true }));

	app.get('/adminLogout', function(req, res) {
  	req.logout();
  	res.redirect('/adminLogin');
	});

	// Load MainAdmin Page
	app.get('/adminPanel', user.secureLogin, function(req, res) {
		article.getAll(req, function(error, articles) {
			res.render('admin_panel', { articles : articles });
		});
	});

	// NewArticle
	app.post('/newArticle', user.secureLogin, function(req, res) {
		article.create(req, function(result, message){
				if (result){
					res.end('Article created :: ' + result[0].title);
				}else{
					res.end('Error :: ' + message);
				}
		});
	});


}