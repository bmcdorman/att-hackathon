'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var LeadSchema = new Schema({
  name: {type: String, trim: true},
  phone: {type: String, trim: true},
  address: {type: String, trim: true},
  validated: {type: Boolean, trim: true, default:false},
});

module.exports = mongoose.model('Lead', LeadSchema);