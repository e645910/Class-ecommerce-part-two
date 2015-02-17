"use strict";
var mongoose = require('mongoose');
var Tag = require('./tagModel')

var Schema = mongoose.Schema;
var productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, min: 0, precision: 2, required: true },
  active: { type: Boolean, default: true },
  tags: [{type: Number, ref: 'Tag'}]
});

module.exports = mongoose.model('Product', productSchema);