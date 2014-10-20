'use strict';

var _ = require('lodash');
var Lead = require('./lead.model');

// Get list of leads
exports.index = function(req, res) {
  Lead.find(function (err, leads) {
    if(err) { return handleError(res, err); }
    return res.json(200, leads);
  });
};

// Get a single lead
exports.show = function(req, res) {
  Lead.findById(req.params.id, function (err, lead) {
    if(err) { return handleError(res, err); }
    if(!lead) { return res.send(404); }
    return res.json(lead);
  });
};

// Creates a new lead in the DB.
exports.create = function(req, res) {
  Lead.create(req.body, function(err, lead) {
    if(err) { return handleError(res, err); }
    return res.json(201, lead);
  });
};

// Updates an existing lead in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lead.findById(req.params.id, function (err, lead) {
    if (err) { return handleError(res, err); }
    if(!lead) { return res.send(404); }
    var updated = _.merge(lead, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, lead);
    });
  });
};

// Deletes a lead from the DB.
exports.destroy = function(req, res) {
  Lead.findById(req.params.id, function (err, lead) {
    if(err) { return handleError(res, err); }
    if(!lead) { return res.send(404); }
    lead.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}