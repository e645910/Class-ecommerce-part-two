"use-strict";

var ProductService = require('../services/product-service');

module.exports.get = function(req, res){
	ProductService.getAllProducts()
		.then(function(products){
			res.json(products);
		}).catch(function(err){
			res.status(500).json(err);
		});
}

module.exports.queryProducts = function(req, res){
	ProductService.queryProducts(req.params.query)
		.then(function(products){
			if(products && products.length > 0){
				products = products.length > 1 ? products : products[0];
				res.json(products);
			} else {
				res.status(404).json(products);
			}
		}).catch(function(err){
			res.status(500).json(err);
		});
}

module.exports.post = function(req, res){
	ProductService.saveProduct(req.body)
		.then(function(product){
			res.json({id: product[0]._id});
		}).catch(function(err){
			res.status(500).json(err);
		});
}

module.exports.put = function(req, res){
	var query = req.params.query;
	if(!query){
		res.status(404).send();
	} else {
		ProductService.saveProduct(req.body, query)
			.then(function(product){
				res.send();
			}).catch(function(err){
				res.status(500).json(err);
			})
	}
}

module.exports.delete = function(req, res){
	ProductService.deleteProduct(req.params.id)
		.then(function(product){
			res.send();
		}).catch(function(err){
			res.status(500).json(err);
		})
}