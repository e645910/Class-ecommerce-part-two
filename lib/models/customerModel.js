'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schema = new Schema({
	name: {type: String, index: true, required: true},
	email: {type: String, index: true, required: true},
  	address: { type: String, required: true },
  	address2: { type: String },
	  city: { type: String, required: true },
	  state: { type: String, required: true },
	  zip: { type: String, required: true },
	  active: { type: Boolean, default: true },
	kind: { type: String, required: true, enum: ['Billing', 'Shipping', 'Both'], default: 'Both' },
	phoneNumber: { type: String, required: true },
  	phoneActive: { type: Boolean, default: true },
  	phoneKind: { type: String, enum: ['mobile', 'work', 'home', 'other'] }
	});

module.exports = mongoose.model('Customer', schema);