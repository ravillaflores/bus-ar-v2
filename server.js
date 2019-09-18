/**
 * Introduction to Human-Computer Interaction
 * Lab 1
 * --------------
 * Created by: Michael Bernstein
 * Last updated: December 2013
 */
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');

// Create the server instance
var exp_app = express();

// Print logs to the console and compress pages we send
exp_app.use(express.logger());
exp_app.use(express.compress());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
exp_app.use('/src', express.static(__dirname + '/src')); //Run Framework7 app
exp_app.get('/', function (req, res) {

	res.sendFile(path.join(__dirname + '/src/index.html')); 

});

var routes = require('./src/js/routes');  //RESTful APIs
routes(exp_app);

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
exp_app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});