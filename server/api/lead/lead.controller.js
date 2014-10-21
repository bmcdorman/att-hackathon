'use strict';

var _ = require('lodash');
var Lead = require('./lead.model');
var request = require('request');

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
    var url = 'https://ebm:canigetamap@vm032064181085.attcompute.com/EBM/API/v84/ValidateAddress.php?street='+req.body.street+'&city='+req.body.city+'&zipCode='+req.body.zipCode;

    request.get(url,{'rejectUnauthorized':false}, function (err, httpResponse, body){
      if (err) {return handleError(res, err);}
      var addressed_parsed = JSON.parse(body)['AddressServiceAvailability'];
      if (addressed_parsed.statusCode != null)
      {
        req.body.street = addressed_parsed.AddressMatchDetails.street;
        req.body.city = addressed_parsed.AddressMatchDetails.city;
        req.body.zipCode = addressed_parsed.AddressMatchDetails.Zip.zipCode;
        req.body.verified_VASA = true;
        var available_services = '';
        _.each(addressed_parsed.ServiceAvailabilityDetails.Ethernet.Service, function(i){
          available_services += i.name + ', ' + i.switchedDedicated +' / ';
        });
        req.body.available_services = available_services;
      }
      Lead.create(req.body, function(err, lead) {
        if(err) { return handleError(res, err); }
        return res.json(201, lead);
      });
  });
};

// Updates an existing lead in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lead.findById(req.params.id, function (err, lead) {
    if (err) { return handleError(res, err); }
    if(!lead) { return res.send(404); }
    var updated = _.merge(lead, req.body);
    var url = 'https://ebm:canigetamap@vm032064181085.attcompute.com/EBM/API/v84/ValidateAddress.php?street='+updated.street+'&city='+updated.city+'&zipCode='+updated.zipCode;

    request.get(url,{'rejectUnauthorized':false}, function (err, httpResponse, body){
      if (err) {return handleError(res, err);}
      var addressed_parsed = JSON.parse(body)['AddressServiceAvailability'];
      if (addressed_parsed.statusCode != null)
      {
        updated.street = addressed_parsed.AddressMatchDetails.street;
        updated.city = addressed_parsed.AddressMatchDetails.city;
        updated.zipCode = addressed_parsed.AddressMatchDetails.Zip.zipCode;
        updated.verified_VASA = true;
        var available_services = '';
        _.each(addressed_parsed.ServiceAvailabilityDetails.Ethernet.Service, function(i){
          available_services += i.name + ', ' + i.switchedDedicated +' / ';
        });
        updated.available_services = available_services;
      }
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.json(200, lead);
      });
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

// var str = Object.keys(obj).map(function(key){ 
//   return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); 
// }).join('&');