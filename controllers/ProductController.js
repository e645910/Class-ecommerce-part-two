var Product = require('../models/product');

module.exports = {
	getProduct: function(req, res) {
		Product.findOne({_id: req.params.id})
			.exec(function(err, product) {
				if (err) {
					console.error(err);
					return res.status(500).end();
				}
				if (!product) {
					return res.status(404).end();
				}
				return res.json(product);
			});
	},
	getProducts: function(req, res) {
		Product.find()
			.sort('-createdAt')
			.exec(function(err, products) {
				if (err) {
					console.error(err);
					return res.status(500).end();
				}
				if (!products) {
					return res.status(404).end();
				}
				return res.json(products);
			});
	},
	saveProduct: function(req, res) {
		Product.update({_id: req.params.id}, req.body)
			.exec(function(err, product) {
				if (err) {
					console.error(err);
					return res.status(500).end();
				}
				if (!product) {
					return res.status(404).end();
				}
				return res.json(product);
			});
	},
	addProduct: function(req, res) {
		var product = new Product(req.body);
		product.save(function(err, product) {
			if (err) {
				console.error(err);
				return res.status(500).end();
			}
			return res.json(product);
		});
	},
	deleteProduct: function(req, res) {
		Product.remove({_id: req.params.id})
			.exec(function(err) {
				if (err) {
					console.error(err);
					return res.status(500).end();
				}
				return res.status(200).end();
			});
	},
}