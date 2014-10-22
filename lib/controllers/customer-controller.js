"use-strict";

var CustomerService = require('../services/customer-service');

module.exports.get = function(req, res){
	CustomerService.getCustomers()
		.then(function(customers){
			res.json(customers);
		}).catch(function(err){
			res.status(500).json(err);
		})
}

module.exports.post = function(req, res) {
	CustomerService.saveCustomer(req.body)
		.then(function(customers){
			res.json({id: customers[0]._id});
		}).catch(function(err){
			res.status(500).json(err);
		})
}