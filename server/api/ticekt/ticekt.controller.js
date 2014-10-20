'use strict';

var _ = require('lodash');
var Ticekt = require('./ticekt.model');

// Get list of ticekts
exports.index = function(req, res) {
  Ticekt.find(function (err, ticekts) {
    if(err) { return handleError(res, err); }
    return res.json(200, ticekts);
  });
};

// Get a single ticekt
exports.show = function(req, res) {
  Ticekt.findById(req.params.id, function (err, ticekt) {
    if(err) { return handleError(res, err); }
    if(!ticekt) { return res.send(404); }
    return res.json(ticekt);
  });
};

// Creates a new ticekt in the DB.
exports.create = function(req, res) {
  Ticekt.create(req.body, function(err, ticekt) {
    if(err) { return handleError(res, err); }
    return res.json(201, ticekt);
  });
};

// Updates an existing ticekt in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ticekt.findById(req.params.id, function (err, ticekt) {
    if (err) { return handleError(res, err); }
    if(!ticekt) { return res.send(404); }
    var updated = _.merge(ticekt, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, ticekt);
    });
  });
};

// Deletes a ticekt from the DB.
exports.destroy = function(req, res) {
  Ticekt.findById(req.params.id, function (err, ticekt) {
    if(err) { return handleError(res, err); }
    if(!ticekt) { return res.send(404); }
    ticekt.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}