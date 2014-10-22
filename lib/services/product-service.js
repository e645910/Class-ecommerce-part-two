"use-strict";

var Promise = require('bluebird'),
	Product = require('../models/product');

Promise.promisifyAll(Product);
Promise.promisifyAll(Product.prototype);

module.exports.getAllProducts = function(){
	return Product.findAsync();
}

module.exports.queryProducts = function(query){
	return Product.findAsync(query);
}

module.exports.getProductById = function(id){
	return Product.findByIdAsync(id);
}

module.exports.saveProduct = function(product, query){
	if(query) {
		return Product.findOneAndUpdateAsync(query, product);
	} else {
		return new Product(product).saveAsync();
	}
}

module.exports.deleteProduct = function(id){
	return Product.findByIdAndRemoveAsync(id);
}