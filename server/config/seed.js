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

User.findOne({email: 'nikhil@ou.edu'}, function (err, user) {
  Lead.create({
    name: "Peter Parker",
    address: "175 Fifth Ave, New York, NY",
    phone: "374 867 5309",
    verified: false
  }, function (err, lead) {
    Ticket.create({
      user_id: user._id,
      lead_id: lead._id,
      status: 0,
      open: true
    }, function (err, ticket) {
      Quote.create ({
        ticket_id: ticket._id,
        std_price: 1000,
        given_price: 800,
        current_services: "AVPN",
        competitors: "Verizon",
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