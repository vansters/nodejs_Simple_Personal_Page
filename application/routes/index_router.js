
module.exports = function(app) {
	
	// Load Main Page
	app.get('/', function(req, res) {
		res.render('index');
	});

	// Load PortFolio Page
	app.get('/portafolio', function(req, res) {
		res.render('portfolio');
	});


}