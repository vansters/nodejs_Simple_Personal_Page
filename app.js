/**
		***************************************
		*	Author: @TheVanters (Mario Andrade) *
		*	Date:  June - 2013									*
		* Repository: ???                     *
		***************************************
**/

var express = require('express'),
	http = require('http'),
	passport = require('passport'),
	flash = require('connect-flash'),
	LocalStrategy = require('./application/models/local_strategy');

// LocalStrategy 
passport.use(LocalStrategy.Strategy);
passport.serializeUser(LocalStrategy.SerializeUser);
passport.deserializeUser(LocalStrategy.DeserializeUser);

var app = express();

app.set('views', __dirname + '/application/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: '#NiLoMandeDios'}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// app.use(require('stylus').middleware({ src: __dirname + '/application/public' }));
app.use(express.static(__dirname +'/application/public'));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Handler Of Routes
require('./application/routes/index_router')(app)
require('./application/routes/blog_router')(app)
require('./application/routes/admin_router')(app)


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});