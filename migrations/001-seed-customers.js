"use-strict";

var Customer = require('../lib/models/customer');
require('../index');

exports.up = function(next){
	var jason = new Customer({
		name: {
		    first: 'Jason',
		    middle: '',
		    last: 'Towner'
		},
		email: 'jsntowner@gmail.com'
	});

	jason.save(function(err){
		if(err){
			console.log(err);
			next(err);
		} else {
			console.log('jason was saved.');
	  		next();
		}
	})
};

exports.down = function(next){
  next();
};
