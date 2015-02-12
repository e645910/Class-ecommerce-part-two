var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	billing_address: String,
	billing_city: String,
	billing_state: String,
	billing_country: String,
	billing_zip: String,
	shipping_address: String,
	shipping_city: String,
	shipping_state: String,
	shipping_country: String,
	shipping_zip: String,
	phone_home: Number,
	phone_work: Number,
	active: Boolean,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', schema);