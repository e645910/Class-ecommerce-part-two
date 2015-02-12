var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ProductController = require('./controllers/ProductController');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');

var app = express();
app.use(bodyParser.json());

app.get('/api/products', ProductController.getProducts);
app.post('/api/products', ProductController.addProduct);
app.get('/api/products/:id', ProductController.getProduct);
app.put('/api/products/:id', ProductController.saveProduct);
app.delete('/api/products/:id', ProductController.deleteProduct);

app.get('/api/customers');
app.post('/api/customers');
app.get('/api/customers/:id');
app.put('/api/customers/:id');
app.delete('/api/customers/:id');

app.listen(8080);