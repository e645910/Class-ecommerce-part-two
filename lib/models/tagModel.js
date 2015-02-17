'use strict';
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    _id: {type: Number, required: true, unique: true}
});

module.exports = mongoose.model("Tag", schema);