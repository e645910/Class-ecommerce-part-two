
'use strict'
var mongoose = require('mongoose');
var Customer = require('./../models/customerModel')
var Product = require('./../models/productModel');

var Schema = mongoose.Schema;
var schema = new Schema({
	productName: { type: Schema.Types.ObjectId, ref: 'Product' },
	customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
	status: { type: String, enum: [''] },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', schema);