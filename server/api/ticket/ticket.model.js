'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var TicketSchema = new Schema({
  lead_id: {type: ObjectId, require: true, trim: true},
  user_id: {type: ObjectId, require: true, trim: true},
  status: {type: Number, default: 1},
  open: {type: Boolean, default: true}
});

module.exports = mongoose.model('Ticket', TicketSchema);