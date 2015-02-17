"use strict";

var Mongoose = require('mongoose');

var product = require('./../models/product');

var schema = new Mongoose.Schema(product);

module.exports = Mongoose.model('ProductCtrl', schema);
