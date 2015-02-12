var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	description: String,
	price: String,
	active: Boolean,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', schema);