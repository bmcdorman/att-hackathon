'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var QouteSchema = new Schema({
  ticket_id: {type: ObjectId, require: true, trim: true},
  std_price: {type: Number, trim: true},
  given_price: {type: Number, trim: true},
  current_services: {type: String, trim: true},
  competitors: {type: String, trim: true},
  service: {type: String, trim: true}
});

module.exports = mongoose.model('Qoute', QouteSchema);