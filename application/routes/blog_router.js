var article = require('../models/article');

module.exports = function(app) {
	
	// Load MainBlog Page
	app.get('/blog', function(req, res) {
		article.getAll(req, function(error, articles) {
			res.render('blog', { articles : articles });
		});
	});

}