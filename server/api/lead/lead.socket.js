/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Lead = require('./lead.model');

exports.register = function(socket) {
  Lead.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Lead.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('lead:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('lead:remove', doc);
}