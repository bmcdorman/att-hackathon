'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var LeadSchema = new Schema({
  name: {type: String, trim: true},
  phone: {type: String, trim: true},
  street: {type: String, trim: true},
  city: {type: String, trim: true},
  zipCode: {type: String, trim: true},
  availible_services: {type: String, trim: true, default:''},
  competitor_services: {type: String, trim: true, default:''},
  verified_gps: {type: Boolean, trim: true, default:false},
  verified_call: {type: Boolean, trim: true, default:false},
  verified_VASA: {type: Boolean, trim: true, default:false}
});

module.exports = mongoose.model('Lead', LeadSchema);