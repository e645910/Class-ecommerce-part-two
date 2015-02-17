var products = require('./../models/product');

module.exports = {
	post: function(req, res){
		product.create(req.body, function(err, results){
			if(err) {
				console.log(err);
			}
		})
	}