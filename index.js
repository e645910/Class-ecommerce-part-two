"use strict";

var Express = require('express'),
	app = Express(),
	Mongoose = require('mongoose'),
	BodyParser = require('body-parser'),
	ProductController = require('./lib/controllers/product-controller'),
	CustomerController = require('./lib/controllers/customer-controller'),
	IdTypeMiddleware = require('./lib/middleware/id-type-middleware');

app.use(BodyParser.json());

// Mongoose connection
var mongoUri = 'mongodb://localhost:27017/ecom';
Mongoose.connect(mongoUri);

var connection = Mongoose.connection;
connection.once('open', function(){
	console.log('Successfully connected to: ' + mongoUri)
});

// Routes

// Products
app.get('/products', ProductController.get);

app.get('/products/:id', IdTypeMiddleware, ProductController.queryProducts);

app.post('/products', ProductController.post);

app.put('/products/:id', IdTypeMiddleware, ProductController.put);

app.delete('/products/:id', IdTypeMiddleware, ProductController.delete);

// Customers
app.get('/customers', CustomerController.get);

app.post('/customers', CustomerController.post);

// Server Startup
var port = 8080;
app.listen(port, function(){
	console.log('Express is listening on port: ' + port);
});