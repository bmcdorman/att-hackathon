'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var QuoteSchema = new Schema({
  ticket_id: {type: ObjectId, require: true, trim: true},
  std_price: {type: Number, trim: true},
  given_price: {type: Number, trim: true},
  approved: {type: Boolean, trim: true, default:false},
  accepted: {type: Boolean, trim: true, default:false},
  contracted: {type: Boolean, trim: true, default:false},
  service: {type: String, trim: true}
});

module.exports = mongoose.model('Quote', QuoteSchema);