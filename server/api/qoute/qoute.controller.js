'use strict';

var _ = require('lodash');
var Qoute = require('./qoute.model');

// Get list of qoutes
exports.index = function(req, res) {
  Qoute.find(function (err, qoutes) {
    if(err) { return handleError(res, err); }
    return res.json(200, qoutes);
  });
};

// Get a single qoute
exports.show = function(req, res) {
  Qoute.findById(req.params.id, function (err, qoute) {
    if(err) { return handleError(res, err); }
    if(!qoute) { return res.send(404); }
    return res.json(qoute);
  });
};

// Creates a new qoute in the DB.
exports.create = function(req, res) {
  Qoute.create(req.body, function(err, qoute) {
    if(err) { return handleError(res, err); }
    return res.json(201, qoute);
  });
};

// Updates an existing qoute in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Qoute.findById(req.params.id, function (err, qoute) {
    if (err) { return handleError(res, err); }
    if(!qoute) { return res.send(404); }
    var updated = _.merge(qoute, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, qoute);
    });
  });
};

// Deletes a qoute from the DB.
exports.destroy = function(req, res) {
  Qoute.findById(req.params.id, function (err, qoute) {
    if(err) { return handleError(res, err); }
    if(!qoute) { return res.send(404); }
    qoute.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}