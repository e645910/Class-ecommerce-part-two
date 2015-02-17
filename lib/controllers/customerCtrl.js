'use strict';

var CustomerService = require('../services/customerService');

module.exports.get = function(req, res){
  CustomerService.save(req.body)
  .then(function(respons){
      res.respons(200).json(response);
    }, function(err){
      res.status(400).json(err)
  })
};

module.exports.get = function(req, res){
  CustomerService.find(req.query)
  .then(function(response){
      res.status(200).json(response);
    }, function(err){
        res.status(400).json(err);
    })
};