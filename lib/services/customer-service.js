"use-strict";

var Promise = require('bluebird'),
	Customer = require('../models/customer');

Promise.promisifyAll(Customer);
Promise.promisifyAll(Customer.prototype);

module.exports.getCustomers = function(){
	return Customer.findAsync();
}

module.exports.saveCustomer = function(customer){
	return new Customer(customer).saveAsync();
}