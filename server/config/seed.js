/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Ticket = require('../api/ticket/ticket.model');
var Lead = require('../api/lead/lead.model');
var Quote = require('../api/quote/quote.model');

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });

// Ticket.find({}, function(err, f) {
//   console.log(f);
// });

// Ticket.find({}).remove(function(){});
// Lead.find({}).remove(function(){});
// Quote.find({}).remove(function(){});

User.findOne({email: 'nikhil@ou.edu'}, function (err, user) {
  Lead.create({
    name: "Peter Parker",
    street: "175 Fifth Ave",
    city: "New York",
    zipCode: "10010",
    phone: "374 867 5309",
    verified: false,
    available_services: "AVPN",
    competitor_services: "Verizon",
    verified_gps: false,
    verified_call: false,
    verified_VASA: false,
  }, function (err, lead) {
    Ticket.create({
      user_id: user._id,
      lead_id: lead._id,
      status: 1,
      open: true
    }, function (err, ticket) {
      Quote.create ({
        ticket_id: ticket._id,
        std_price: 1000,
        given_price: 800,
        service: "AVPN and MIS"
      }, function (err, quote) {
        console.log(user);
        console.log(lead);
        console.log(ticket);
        console.log(quote);
      });
    });
  });
});