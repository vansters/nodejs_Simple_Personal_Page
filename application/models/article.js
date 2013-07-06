// Import MoongoDB Connection
var db = require('../config/config_db'),
		article = db.collection('articles'),
		moment = require('moment');
moment.lang('es'); 

exports.create = function(req, callback) {
	var data  = {
				title: 		req.body.title, 
				author: 	'@TheVanters', 
				date: 		moment().format('MMMM Do YYYY'),
			  prep: 		req.body.pre,
				content: 	req.body.content,
				image: 		req.body.image,
				score: 		0
		};
	article.insert(data, {safe: true}, function(error, result){
		if (error) {
			callback(null, "Can't create article");
		}else{
			callback(result);
		}	
	});
}

exports.getAll = function(req, callback) {
	article.find().toArray( function(error, result) {
		if (result) {
			callback(null, result);
		}else{
			callback(error, null);
		}
	});
}