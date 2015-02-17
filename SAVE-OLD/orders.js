
'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new mongoose.Schema({
	items = { Mongoose.Schema.Types.ObjectId, ref: 'Product' },
	customer: { Mongoose.Schema.Types.ObjectId, ref: 'Customer' },
	status: { type: String, enum: [''] },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', schema);