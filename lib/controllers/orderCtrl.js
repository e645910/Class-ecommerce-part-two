"use strict";

var OrderService = require('../services/orderService');
var CustomerService = require('../services/customerService');

module.exports.get = function(req, res){
  OrderService.save(req.body)
  .then(function(respons){
      res.respons(200).json(response);
    }, function(err){
      res.status(400).json(err)
  })
};

module.exports.get = function(req, res){
  OrderService.find(req.query)
  .then(function(response){
      res.status(200).json(response);
    }, function(err){
        res.status(400).json(err);
    })
};