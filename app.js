'use strict';

//Load Modules
var mongoose   = require('mongoose'),
	express    = require('express'),
	bodyParser = require('body-parser'),
	path       = require('path');


//Express setup
var app = express();
app.set( 'port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( bodyParser.json() );

//Database Connection
mongoose.connect( process.env.MONGODB_URL );


mongoose.connection.on( 'connected',function() {
	console.log( 'Connection successful' );

});

mongoose.connection.on( 'error', function( error ) {
	console.log( 'error' + error );
});

//Start server
app.listen( app.get( 'port' ),function() {
	console.log( 'Listening on port: ' + app.get( 'port' ));
});

app.get('/test', function(req,res){
	res.send({message:'hello world!'});

});