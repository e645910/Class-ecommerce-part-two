'use strict';
var CustomerModel = require('./../models/customerModel');
var q = require('q');

module.exports.save = function(customer){
	var dfd = q.defer();
	CustomerModel(customer).save(function(err, res){
		if(!err){
			did.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};

module.exports.find = function(query){
	var dfd = q.defer();
	CustomerModel.find(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};