// MongoDb Configuration

var MongoDB  = require('mongodb').Db
	, dbServer = require('mongodb').Server;

var dbDev  = {
	dbPort: 27017,
	dbHost: 'localhost',
	dbName: 'dbName'
}

// Establishing Connection
var dbConnection = new MongoDB(dbDev.dbName, new dbServer(dbDev.dbHost, dbDev.dbPort, {auto_reconnect: true}), {w:1});
dbConnection.open(function(error,d) {
	if(error){
		console.log('Error :: ' + e);
	}else{
		console.log('Connected to DataBase :: ' + dbDev.dbName);
	}
});

// Exporting Connection
module.exports = dbConnection;



